import { Module } from '@nestjs/common';
import { CategoryBannersService } from './category-banners.service';
import { CategoryBannersController } from './category-banners.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryBanner } from './entities/category-banner.entity';
import { CategoryBannerRepository } from './category-banners.repository';

@Module({
    imports: [TypeOrmModule.forFeature([CategoryBanner])],
    controllers: [CategoryBannersController],
    providers: [CategoryBannersService, CategoryBannerRepository],
})
export class CategoryBannersModule {}
