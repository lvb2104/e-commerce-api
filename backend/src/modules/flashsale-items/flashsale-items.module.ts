import { Module } from '@nestjs/common';
import { FlashsaleItemsService } from './flashsale-items.service';
import { FlashsaleItemsController } from './flashsale-items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlashsaleItem } from './entities/flashsale-item.entity';
import { FlashsaleItemRepository } from './flashsale-items.repository';

@Module({
    imports: [TypeOrmModule.forFeature([FlashsaleItem])],
    controllers: [FlashsaleItemsController],
    providers: [FlashsaleItemsService, FlashsaleItemRepository],
})
export class FlashsaleItemsModule {}
