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
import { ItemImageRepository } from '../item-images/item-images.repository';
import { RawFiles } from './dto/raw-files.dto';
import { UploadsService } from '../uploads/uploads.service';
import { ItemImage } from '../item-images/entities/item-image.entity';

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
        fileUrls.avatar = await this.uploadsService.uploadFile(files.avatar[0]);
        fileUrls.images = await this.uploadsService.uploadFiles(files.images);

        // create a new item
        const category = await this.categoriesService.findOne(id);
        if (!fileUrls.avatar || !fileUrls.images)
            throw new BadRequestException('Must post avatar and images');
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

    async update(
        id: string,
        updateItemDto: UpdateItemDto,
        avatar: Express.Multer.File,
    ) {
        const item = await this.itemRepository.findOne({
            where: { id },
        });
        let avatarUrl: string;
        if (!item) throw new NotFoundException('Item not found');
        if (avatar) {
            await this.uploadsService.deleteFile(item.avatar);
            avatarUrl = await this.uploadsService.uploadFile(avatar);
        }
        const updatedItem = await this.itemRepository.preload({
            ...item,
            ...updateItemDto,
            avatar: avatar ? avatarUrl : item.avatar,
        });
        return this.itemRepository.save(updatedItem);
    }

    async remove(id: string) {
        const item = await this.itemRepository.findOne({
            where: { id },
        });
        if (!item) throw new NotFoundException('Item not found');

        const itemImages = await this.itemImageRepository
            .createQueryBuilder()
            .select()
            .where('itemId = :id', { id })
            .getMany();

        const urls = itemImages.map((itemImage) => itemImage.url);

        await this.itemImageRepository
            .createQueryBuilder()
            .delete()
            .from(ItemImage)
            .where('itemId = :id', { id })
            .execute();

        await this.itemRepository
            .createQueryBuilder()
            .delete()
            .where('id = :id', { id })
            .execute();

        await this.uploadsService.deleteFile(item.avatar);
        await this.uploadsService.deleteFiles(urls);
        return {
            message: 'Deleted',
        };
    }
}
