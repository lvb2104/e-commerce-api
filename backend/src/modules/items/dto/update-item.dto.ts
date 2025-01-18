import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateItemDto } from './create-item.dto';
import {
    IsBoolean,
    IsEnum,
    IsNumber,
    IsOptional,
    IsString,
    MinLength,
} from 'class-validator';
import { ItemStatus } from '../entities/item.entity';

export class UpdateItemDto extends PartialType(CreateItemDto) {
    @IsString()
    @ApiProperty()
    @IsOptional()
    @MinLength(1)
    name?: string;

    @IsString()
    @ApiProperty()
    @IsOptional()
    barcode?: string;

    @IsNumber()
    @ApiProperty()
    @IsOptional()
    importPrice?: number;

    @IsNumber()
    @ApiProperty()
    @IsOptional()
    price?: number;

    @IsNumber()
    @ApiProperty()
    @IsOptional()
    weight?: number;

    @IsNumber()
    @ApiProperty()
    @IsOptional()
    quantity?: number;

    @IsString()
    @ApiProperty()
    @IsOptional()
    description?: string;

    // @IsUrl()
    // @ApiProperty()
    // @IsNotEmpty()
    // avatar: string;

    @IsEnum(ItemStatus)
    @ApiProperty()
    @IsOptional()
    status?: ItemStatus;

    @IsBoolean()
    @ApiProperty()
    @IsOptional()
    isSale?: boolean;
}
