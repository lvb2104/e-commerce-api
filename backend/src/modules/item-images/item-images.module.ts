import { Module } from '@nestjs/common';
import { ItemImagesService } from './item-images.service';
import { ItemImagesController } from './item-images.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemImage } from './entities/item-image.entity';
import { ItemImageRepository } from './item-images.repository';

@Module({
    imports: [TypeOrmModule.forFeature([ItemImage])],
    controllers: [ItemImagesController],
    providers: [ItemImagesService, ItemImageRepository],
})
export class ItemImagesModule {}
