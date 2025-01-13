import { Module } from '@nestjs/common';
import { ItemImagesService } from './item-images.service';
import { ItemImagesController } from './item-images.controller';

@Module({
    controllers: [ItemImagesController],
    providers: [ItemImagesService],
})
export class ItemImagesModule {}
