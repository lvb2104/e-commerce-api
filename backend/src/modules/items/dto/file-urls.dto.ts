import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray, IsUrl } from 'class-validator';

export class FileUrls {
    @IsUrl()
    @ApiProperty()
    avatar: string;

    @IsArray()
    @ArrayNotEmpty()
    @ApiProperty()
    @IsUrl({}, { each: true })
    images: string[];
}
