import { Module } from '@nestjs/common';
import { CategoryBannersService } from './category-banners.service';
import { CategoryBannersController } from './category-banners.controller';

@Module({
    controllers: [CategoryBannersController],
    providers: [CategoryBannersService],
})
export class CategoryBannersModule {}
