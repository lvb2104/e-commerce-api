import { Injectable } from '@nestjs/common';
import { CreateCategoryBannerDto } from './dto/create-category-banner.dto';
import { UpdateCategoryBannerDto } from './dto/update-category-banner.dto';

@Injectable()
export class CategoryBannersService {
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
