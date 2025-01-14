import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CategoryBanner } from './entities/category-banner.entity';

@Injectable()
export class CategoryBannerRepository extends Repository<CategoryBanner> {
    constructor(private dataSource: DataSource) {
        super(CategoryBanner, dataSource.createEntityManager());
    }
}
