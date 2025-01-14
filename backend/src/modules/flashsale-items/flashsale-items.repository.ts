import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { FlashsaleItem } from './entities/flashsale-item.entity';

@Injectable()
export class FlashsaleItemRepository extends Repository<FlashsaleItem> {
    constructor(private dataSource: DataSource) {
        super(FlashsaleItem, dataSource.createEntityManager());
    }
}
