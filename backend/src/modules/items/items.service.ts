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

@Injectable()
export class ItemsService {
    constructor(
        private readonly categoriesService: CategoriesService,
        @InjectRepository(ItemRepository)
        private readonly itemRepository: ItemRepository,
        @InjectRepository(ItemImageRepository)
        private readonly itemImageRepository: ItemImageRepository,
    ) {}

    async create(
        createItemDto: CreateItemDto,
        categoryId: string,
        files: FileUrls,
    ) {
        const category = await this.categoriesService.findOne(categoryId);
        if (!files.avatar || !files.images)
            throw new BadRequestException('Must post avatar and images');
        const avatar = files.avatar;
        const newItem = this.itemRepository.create({
            ...createItemDto,
            category,
            avatar,
        });
        await this.itemRepository.save(newItem);

        files.images.forEach(async (url) => {
            const newItemImage = this.itemImageRepository.create({
                url,
                item: newItem,
            });
            await this.itemImageRepository.save(newItemImage);
        });
        return newItem;
    }

    async findAll() {
        return await this.itemRepository.find();
    }

    async findOne(id: string) {
        const item = await this.itemRepository.findOne({
            where: { id },
        });
        if (!item) throw new NotFoundException('Item not found');
        return item;
    }

    update(id: string, updateItemDto: UpdateItemDto) {
        return `This action updates a #${id} item`;
    }

    remove(id: string) {
        return `This action removes a #${id} item`;
    }
}
