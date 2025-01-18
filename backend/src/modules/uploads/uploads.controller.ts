import {
    Controller,
    FileTypeValidator,
    MaxFileSizeValidator,
    ParseFilePipe,
    Post,
    UploadedFile,
    UploadedFiles,
    UseInterceptors,
} from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('uploads')
export class UploadsController {
    constructor(private readonly uploadsService: UploadsService) {}

    @Post('file')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }), // 5MB
                    new FileTypeValidator({
                        fileType: /image\/jpeg|image\/jpg|image\/png/,
                    }),
                ],
            }),
        )
        file: Express.Multer.File,
    ) {
        const url = await this.uploadsService.uploadFile(file);
        return { url };
    }

    @Post('files')
    @UseInterceptors(FilesInterceptor('files', 20))
    async uploadFiles(
        @UploadedFiles()
        files: Express.Multer.File[],
    ) {
        const urls = await this.uploadsService.uploadFiles(files);
        return { urls };
    }
}
