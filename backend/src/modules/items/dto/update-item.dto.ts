import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateItemDto } from './create-item.dto';
import {
    IsNumber,
    IsOptional,
    IsString,
    IsUrl,
    MinLength,
} from 'class-validator';
import { ItemStatus } from '../entities/item.entity';

export class UpdateItemDto extends PartialType(CreateItemDto) {
    @IsString()
    @ApiProperty()
    @IsOptional()
    @MinLength(1)
    name: string;

    @IsString()
    @ApiProperty()
    @IsOptional()
    barcode: string;

    @IsNumber()
    @ApiProperty()
    @IsOptional()
    importPrice: number;

    @IsNumber()
    @ApiProperty()
    @IsOptional()
    price: number;

    @IsNumber()
    @ApiProperty()
    @IsOptional()
    weight: number;

    @IsNumber()
    @ApiProperty()
    @IsOptional()
    quantity: number;

    @IsString()
    @ApiProperty()
    @IsOptional()
    description: string;

    @IsUrl()
    @ApiProperty()
    @IsOptional()
    avatar: string;

    @ApiProperty()
    @IsOptional()
    status: ItemStatus;

    @ApiProperty()
    @IsOptional()
    isSale: boolean;

    @ApiProperty()
    @IsOptional()
    categoryId: string;
}
