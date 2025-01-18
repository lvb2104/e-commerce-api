import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseInterceptors,
    UploadedFiles,
    BadRequestException,
    UploadedFile,
    ParseFilePipe,
    MaxFileSizeValidator,
    FileTypeValidator,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import {
    FileFieldsInterceptor,
    FileInterceptor,
} from '@nestjs/platform-express';
import { RawFiles } from './dto/raw-files.dto';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Post(':id')
    @UseInterceptors(
        FileFieldsInterceptor(
            [
                { name: 'avatar', maxCount: 1 },
                { name: 'images', maxCount: 20 },
            ],
            {
                limits: {
                    fileSize: 15 * 1024 * 1024, // 15MB
                    files: 21,
                },
                fileFilter: (req, file, callback) => {
                    if (!file.mimetype.match(/^image\/(jpeg|png|jpg)$/)) {
                        return callback(
                            new BadRequestException(
                                `${file.originalname} is not a valid image file`,
                            ),
                            false,
                        );
                    }
                    callback(null, true);
                },
            },
        ),
    )
    create(
        @Body() createItemDto: CreateItemDto,
        @Param('id') categoryId: string,
        @UploadedFiles() files: RawFiles,
    ) {
        return this.itemsService.create(createItemDto, categoryId, files);
    }

    @Get()
    findAll() {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.itemsService.findOne(id);
    }

    @Patch(':id')
    @UseInterceptors(FileInterceptor('avatar'))
    async update(
        // @Param('categoryId') categoryId: string,
        @Param('id') itemId: string,
        @Body() updateItemDto: UpdateItemDto,
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new MaxFileSizeValidator({ maxSize: 15 * 1024 * 1024 }), // 15MB
                    new FileTypeValidator({
                        fileType: /image\/jpeg|image\/jpg|image\/png/,
                    }),
                ],
            }),
        )
        avatar: Express.Multer.File,
    ) {
        return this.itemsService.update(itemId, updateItemDto, avatar);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.itemsService.remove(id);
    }
}
