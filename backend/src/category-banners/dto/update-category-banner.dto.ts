import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryBannerDto } from './create-category-banner.dto';

export class UpdateCategoryBannerDto extends PartialType(
    CreateCategoryBannerDto,
) {}
