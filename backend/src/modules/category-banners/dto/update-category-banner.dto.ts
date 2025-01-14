import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryBannerDto } from './create-category-banner.dto';
import { IsNumber, IsOptional, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryBannerDto extends PartialType(
    CreateCategoryBannerDto,
) {
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    position?: number;

    @ApiProperty()
    @IsUrl()
    @IsOptional()
    url?: string;
}
