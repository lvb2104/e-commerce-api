import {
    IsBoolean,
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    IsUrl,
    MinLength,
} from 'class-validator';
import { ItemStatus } from '../entities/item.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    @MinLength(1)
    name: string;

    @IsString()
    @ApiProperty()
    @IsOptional()
    barcode: string;

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    importPrice: number;

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    weight: number;

    @IsNumber()
    @ApiProperty()
    @IsNotEmpty()
    quantity: number;

    @IsString()
    @ApiProperty()
    @IsOptional()
    description: string;

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
    isSale: boolean;
}
