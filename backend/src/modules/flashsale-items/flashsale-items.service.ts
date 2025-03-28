import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFlashsaleItemDto } from './dto/create-flashsale-item.dto';
import { UpdateFlashsaleItemDto } from './dto/update-flashsale-item.dto';
import { FlashsaleItemRepository } from './flashsale-items.repository';

@Injectable()
export class FlashsaleItemsService {
    constructor(
        @InjectRepository(FlashsaleItemRepository)
        private readonly flashsaleItemRepository: FlashsaleItemRepository,
    ) {}

    create(createFlashsaleItemDto: CreateFlashsaleItemDto) {
        return 'This action adds a new flashsaleItem';
    }

    findAll() {
        return `This action returns all flashsaleItems`;
    }

    findOne(id: number) {
        return `This action returns a #${id} flashsaleItem`;
    }

    update(id: number, updateFlashsaleItemDto: UpdateFlashsaleItemDto) {
        return `This action updates a #${id} flashsaleItem`;
    }

    remove(id: number) {
        return `This action removes a #${id} flashsaleItem`;
    }
}
