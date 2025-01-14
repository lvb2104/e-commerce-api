import { PartialType } from '@nestjs/mapped-types';
import { CreateFlashsaleItemDto } from './create-flashsale-item.dto';

export class UpdateFlashsaleItemDto extends PartialType(
    CreateFlashsaleItemDto,
) {}
