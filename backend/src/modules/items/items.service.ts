import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemRepository } from './items.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesService } from '../categories/categories.service';
import { FileUrls } from './dto/file-urls.dto';
import { ItemImageRepository } from './item-images.repository';
import { RawFiles } from './dto/raw-files.dto';
import { UploadsService } from '../uploads/uploads.service';
import { ItemImage } from './entities/item-image.entity';

@Injectable()
export class ItemsService {
    constructor(
        private readonly uploadsService: UploadsService,
        private readonly categoriesService: CategoriesService,
        @InjectRepository(ItemRepository)
        private readonly itemRepository: ItemRepository,
        @InjectRepository(ItemImageRepository)
        private readonly itemImageRepository: ItemImageRepository,
    ) {}

    async create(createItemDto: CreateItemDto, id: string, files: RawFiles) {
        // upload to aws-s3
        const fileUrls: FileUrls = {
            avatar: '',
            images: [],
        };
        if (!files.avatar || !files.images)
            throw new BadRequestException('Must post avatar and images');
        fileUrls.avatar = await this.uploadsService.uploadFile(files.avatar[0]);
        fileUrls.images = await this.uploadsService.uploadFiles(files.images);

        // create a new item
        const category = await this.categoriesService.findOne(id);
        if (!category) throw new BadRequestException('Category not found');
        const avatar = fileUrls.avatar;
        const newItem = this.itemRepository.create({
            ...createItemDto,
            category,
            avatar,
        });
        await this.itemRepository.save(newItem);

        // cascade item images
        fileUrls.images.forEach(async (url) => {
            const newItemImage = this.itemImageRepository.create({
                url,
                item: newItem,
            });
            await this.itemImageRepository.save(newItemImage);
        });
        return newItem;
    }

    findAll() {
        return this.itemRepository.find();
    }

    async findOne(id: string) {
        const item = await this.itemRepository.findOne({
            where: { id },
        });
        if (!item) throw new NotFoundException('Item not found');
        return item;
    }

    findAllItemImages() {
        return this.itemImageRepository.find();
    }

    findOneItemImages(id: string) {
        return this.itemImageRepository
            .createQueryBuilder()
            .select()
            .where('itemId = :id', { id })
            .getMany();
    }

    async update(
        id: string,
        updateItemDto: UpdateItemDto,
        avatar: Express.Multer.File,
    ) {
        // get item
        const item = await this.itemRepository.findOne({
            where: { id },
        });
        if (!item) throw new NotFoundException('Item not found');

        // update on aws-s3
        let avatarUrl: string;
        if (avatar) {
            await this.uploadsService.deleteFile(item.avatar);
            avatarUrl = await this.uploadsService.uploadFile(avatar);
        }

        // update item
        const updatedItem = await this.itemRepository.preload({
            ...item,
            ...updateItemDto,
            avatar: avatar ? avatarUrl : item.avatar,
        });
        return this.itemRepository.save(updatedItem);
    }

    async remove(id: string) {
        // get item
        const item = await this.itemRepository.findOne({
            where: { id },
        });
        if (!item) throw new NotFoundException('Item not found');

        // get item images
        const itemImages = await this.itemImageRepository
            .createQueryBuilder()
            .select()
            .where('itemId = :id', { id })
            .getMany();

        // get item image urls
        const urls = itemImages.map((itemImage) => itemImage.url);

        // delete item images in db
        await this.itemImageRepository
            .createQueryBuilder()
            .delete()
            .from(ItemImage)
            .where('itemId = :id', { id })
            .execute();

        // delete item in db
        await this.itemRepository
            .createQueryBuilder()
            .delete()
            .where('id = :id', { id })
            .execute();

        // delete item images and avatar on aws-s3
        await this.uploadsService.deleteFile(item.avatar);
        await this.uploadsService.deleteFiles(urls);
        return {
            message: 'Deleted',
        };
    }
}
