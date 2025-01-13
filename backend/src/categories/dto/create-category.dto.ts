import {
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    MinLength,
} from 'class-validator';
import { CategoryStatus } from '../entities/category.entity';

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    readonly name: string;

    @IsEnum(CategoryStatus)
    @IsOptional()
    readonly status?: CategoryStatus;
}
