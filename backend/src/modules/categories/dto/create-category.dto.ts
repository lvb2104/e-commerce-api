import {
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    MinLength,
} from 'class-validator';
import { CategoryStatus } from '../entities/category.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    readonly name: string;

    @ApiProperty()
    @IsEnum(CategoryStatus)
    @IsOptional()
    readonly status?: CategoryStatus;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    url: string;
}
