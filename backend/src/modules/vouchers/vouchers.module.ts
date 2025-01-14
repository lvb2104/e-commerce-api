import { Module } from '@nestjs/common';
import { VouchersService } from './vouchers.service';
import { VouchersController } from './vouchers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Voucher } from './entities/voucher.entity';
import { VoucherRepository } from './vouchers.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Voucher])],
    controllers: [VouchersController],
    providers: [VouchersService, VoucherRepository],
})
export class VouchersModule {}
