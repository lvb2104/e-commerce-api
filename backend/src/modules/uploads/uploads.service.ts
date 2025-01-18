import {
    DeleteObjectCommand,
    PutObjectCommand,
    S3Client,
} from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UploadsService {
    private readonly bucketName =
        this.configService.getOrThrow('AWS_S3_BUCKET_NAME');
    private readonly region = this.configService.getOrThrow('AWS_S3_REGION');

    private readonly s3Client = new S3Client({
        region: this.configService.getOrThrow('AWS_S3_REGION'),
        credentials: {
            accessKeyId: this.configService.getOrThrow('AWS_S3_ACCESS_KEY'),
            secretAccessKey: this.configService.getOrThrow(
                'AWS_S3_SECRET_ACCESS_KEY',
            ),
        },
    });

    constructor(private readonly configService: ConfigService) {}

    async uploadFile(file: Express.Multer.File) {
        const randomName = `${Date.now()}-${file.originalname}`;
        const command = new PutObjectCommand({
            Bucket: this.bucketName,
            Key: randomName,
            Body: file.buffer,
        });
        await this.s3Client.send(command);

        return `https://${this.bucketName}.s3.${this.region}.amazonaws.com/${randomName}`;
    }

    async uploadFiles(files: Express.Multer.File[]) {
        const urls = await Promise.all(
            files.map(async (file) => {
                const randomName = `${Date.now()}-${file.originalname}`;
                await this.s3Client.send(
                    new PutObjectCommand({
                        Bucket: this.bucketName,
                        Key: randomName,
                        Body: file.buffer,
                    }),
                );
                return `https://${this.bucketName}.s3.${this.region}.amazonaws.com/${randomName}`;
            }),
        );
        return urls;
    }

    async deleteFile(fileUrl: string) {
        const key = fileUrl.split('/').pop();
        const command = new DeleteObjectCommand({
            Bucket: this.bucketName,
            Key: key,
        });
        await this.s3Client.send(command);
    }

    async deleteFiles(fileUrls: string[]) {
        const keys = fileUrls.map((url) => url.split('/').pop());
        const commands = keys.map(
            (key) =>
                new DeleteObjectCommand({
                    Bucket: this.bucketName,
                    Key: key,
                }),
        );
        await Promise.all(
            commands.map((command) => this.s3Client.send(command)),
        );
    }
}
