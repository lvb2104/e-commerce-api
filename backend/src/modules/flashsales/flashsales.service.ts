import { Injectable } from '@nestjs/common';
import { CreateFlashsaleDto } from './dto/create-flashsale.dto';
import { UpdateFlashsaleDto } from './dto/update-flashsale.dto';
import { FlashsaleRepository } from './flashsales.repository';

@Injectable()
export class FlashsalesService {
    constructor(private readonly flashsaleRepository: FlashsaleRepository) {}

    create(createFlashsaleDto: CreateFlashsaleDto) {
        return 'This action adds a new flashsale';
    }

    findAll() {
        return `This action returns all flashsales`;
    }

    findOne(id: number) {
        return `This action returns a #${id} flashsale`;
    }

    update(id: number, updateFlashsaleDto: UpdateFlashsaleDto) {
        return `This action updates a #${id} flashsale`;
    }

    remove(id: number) {
        return `This action removes a #${id} flashsale`;
    }
}
