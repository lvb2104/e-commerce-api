import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseInterceptors,
    ParseFilePipe,
    MaxFileSizeValidator,
    FileTypeValidator,
    UploadedFiles,
    BadRequestException,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { RawFiles } from './dto/raw-files.dto';
import { UploadsService } from '../uploads/uploads.service';
import { FileUrls } from './dto/file-urls.dto';

@Controller('items')
export class ItemsController {
    constructor(
        private readonly itemsService: ItemsService,
        private readonly uploadsService: UploadsService,
    ) {}

    @Post(':id')
    @UseInterceptors(
        FileFieldsInterceptor(
            [
                { name: 'avatar', maxCount: 1 },
                { name: 'images', maxCount: 20 },
            ],
            {
                limits: {
                    fileSize: 5 * 1024 * 1024, // 5MB
                    files: 21, // avatar + max 20 images
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
    async create(
        @Body() createItemDto: CreateItemDto,
        @Param('id') categoryId: string,
        @UploadedFiles() files: RawFiles,
    ) {
        const fileUrls: FileUrls = {
            avatar: '',
            images: [],
        };
        fileUrls.avatar = await this.uploadsService.uploadFile(files.avatar[0]);
        fileUrls.images = await this.uploadsService.uploadFiles(files.images);
        return await this.itemsService.create(
            createItemDto,
            categoryId,
            fileUrls,
        );
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
    update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
        return this.itemsService.update(id, updateItemDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.itemsService.remove(id);
    }
}
