import { Injectable } from '@nestjs/common';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { VoucherRepository } from './vouchers.repository';

@Injectable()
export class VouchersService {
    constructor(private readonly voucherRepository: VoucherRepository) {}

    create(createVoucherDto: CreateVoucherDto) {
        return 'This action adds a new voucher';
    }

    findAll() {
        return `This action returns all vouchers`;
    }

    findOne(id: number) {
        return `This action returns a #${id} voucher`;
    }

    update(id: number, updateVoucherDto: UpdateVoucherDto) {
        return `This action updates a #${id} voucher`;
    }

    remove(id: number) {
        return `This action removes a #${id} voucher`;
    }
}
