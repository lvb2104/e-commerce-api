import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray } from 'class-validator';

export class RawFiles {
    @IsArray()
    @ApiProperty()
    @ArrayNotEmpty()
    avatar: Express.Multer.File[];

    @IsArray()
    @ApiProperty()
    @ArrayNotEmpty()
    images: Express.Multer.File[];
}
