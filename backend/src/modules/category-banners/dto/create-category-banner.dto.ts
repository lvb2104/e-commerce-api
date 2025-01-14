import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsUrl } from 'class-validator';

export class CreateCategoryBannerDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    position: number;

    @ApiProperty()
    @IsUrl()
    @IsNotEmpty()
    url: string;
}
