import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemRepository } from './items.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(ItemRepository)
        private readonly itemRepository: ItemRepository,
    ) {}

    create(createItemDto: CreateItemDto) {
        return 'This action adds a new item';
    }

    findAll() {
        return this.itemRepository.find();
    }

    findOne(id: string) {
        return this.itemRepository.findOne({
            where: { id },
        });
    }

    update(id: string, updateItemDto: UpdateItemDto) {
        return `This action updates a #${id} item`;
    }

    remove(id: string) {
        return `This action removes a #${id} item`;
    }
}
