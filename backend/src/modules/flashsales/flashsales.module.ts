import { Module } from '@nestjs/common';
import { FlashsalesService } from './flashsales.service';
import { FlashsalesController } from './flashsales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flashsale } from './entities/flashsale.entity';
import { FlashsaleRepository } from './flashsales.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Flashsale])],
    controllers: [FlashsalesController],
    providers: [FlashsalesService, FlashsaleRepository],
})
export class FlashsalesModule {}
