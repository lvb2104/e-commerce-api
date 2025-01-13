import { Module } from '@nestjs/common';
import { FlashsaleItemsService } from './flashsale-items.service';
import { FlashsaleItemsController } from './flashsale-items.controller';

@Module({
    controllers: [FlashsaleItemsController],
    providers: [FlashsaleItemsService],
})
export class FlashsaleItemsModule {}
