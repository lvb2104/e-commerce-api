import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemRepository } from './items.repository';
import { Item } from './entities/item.entity';
import { CategoriesModule } from '../categories/categories.module';
import { ItemImageRepository } from './item-images.repository';
import { UploadsModule } from '../uploads/uploads.module';
import { ItemImage } from './entities/item-image.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Item, ItemImage]),
        CategoriesModule,
        UploadsModule,
    ],
    controllers: [ItemsController],
    providers: [ItemsService, ItemRepository, ItemImageRepository],
})
export class ItemsModule {}
