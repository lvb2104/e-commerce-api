import { Injectable } from '@nestjs/common';
import { CreateItemImageDto } from './dto/create-item-image.dto';
import { UpdateItemImageDto } from './dto/update-item-image.dto';
import { ItemImageRepository } from './item-images.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemImagesService {
    constructor(
        @InjectRepository(ItemImageRepository)
        private readonly itemImageRepository: ItemImageRepository,
    ) {}

    create(createItemImageDto: CreateItemImageDto) {
        return 'This action adds a new itemImage';
    }

    findAll() {
        return `This action returns all itemImages`;
    }

    findOne(id: number) {
        return `This action returns a #${id} itemImage`;
    }

    update(id: number, updateItemImageDto: UpdateItemImageDto) {
        return `This action updates a #${id} itemImage`;
    }

    remove(id: number) {
        return `This action removes a #${id} itemImage`;
    }
}
