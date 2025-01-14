import { DataSource, Repository } from 'typeorm';
import { Flashsale } from './entities/flashsale.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FlashsaleRepository extends Repository<Flashsale> {
    constructor(private dataSource: DataSource) {
        super(Flashsale, dataSource.createEntityManager());
    }
}
