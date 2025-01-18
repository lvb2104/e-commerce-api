import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCategoryBannerDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    position: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    url: string;
}
