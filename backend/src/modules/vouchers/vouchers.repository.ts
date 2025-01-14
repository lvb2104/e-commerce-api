import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Voucher } from './entities/voucher.entity';

@Injectable()
export class VoucherRepository extends Repository<Voucher> {
    constructor(private dataSource: DataSource) {
        super(Voucher, dataSource.createEntityManager());
    }
}
