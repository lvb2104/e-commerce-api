import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(CategoryRepository)
        private readonly categoryRepository: CategoryRepository,
    ) {}

    async create(createCategoryDto: CreateCategoryDto) {
        const newCategory = this.categoryRepository.create(createCategoryDto);
        return this.categoryRepository.save(newCategory);
    }

    findAll() {
        return this.categoryRepository.find();
    }

    async findOne(id: string) {
        const category = await this.categoryRepository.findOne({
            where: {
                id,
            },
        });
        if (!category) throw new NotFoundException('Category not found');
        return category;
    }

    update(id: string, updateCategoryDto: UpdateCategoryDto) {
        return `This action updates a #${id} category`;
    }

    remove(id: string) {
        return `This action removes a #${id} category`;
    }
}
