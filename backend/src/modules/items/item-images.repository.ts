import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ItemImage } from './entities/item-image.entity';

@Injectable()
export class ItemImageRepository extends Repository<ItemImage> {
    constructor(private dataSource: DataSource) {
        super(ItemImage, dataSource.createEntityManager());
    }
}
