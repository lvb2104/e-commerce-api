import { Injectable } from '@nestjs/common';
import { CreateCategoryBannerDto } from './dto/create-category-banner.dto';
import { UpdateCategoryBannerDto } from './dto/update-category-banner.dto';
import { CategoryBannerRepository } from './category-banners.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryBannersService {
    constructor(
        @InjectRepository(CategoryBannerRepository)
        private readonly categoryBannerRepository: CategoryBannerRepository,
    ) {}

    create(createCategoryBannerDto: CreateCategoryBannerDto) {
        return 'This action adds a new categoryBanner';
    }

    findAll() {
        return `This action returns all categoryBanners`;
    }

    findOne(id: number) {
        return `This action returns a #${id} categoryBanner`;
    }

    update(id: number, updateCategoryBannerDto: UpdateCategoryBannerDto) {
        return `This action updates a #${id} categoryBanner`;
    }

    remove(id: number) {
        return `This action removes a #${id} categoryBanner`;
    }
}
