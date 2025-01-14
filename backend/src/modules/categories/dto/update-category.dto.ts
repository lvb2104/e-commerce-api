import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCategoryDto } from './create-category.dto';
import { IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { CategoryStatus } from '../entities/category.entity';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @MinLength(1)
    readonly name?: string;

    @ApiProperty()
    @IsEnum(CategoryStatus)
    @IsOptional()
    readonly status?: CategoryStatus;
}
