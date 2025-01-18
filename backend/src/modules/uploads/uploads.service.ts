import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
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
        await this.s3Client.send(
            new PutObjectCommand({
                Bucket: this.bucketName,
                Key: randomName,
                Body: file.buffer,
            }),
        );

        return `https://${this.bucketName}.s3.${this.region}.amazonaws.com/${randomName}`;
    }

    async uploadFiles(files: Express.Multer.File[]) {
        const urls = files.map((file) => {
            const randomName = `${Date.now()}-${file.originalname}`;
            return this.s3Client
                .send(
                    new PutObjectCommand({
                        Bucket: this.bucketName,
                        Key: randomName,
                        Body: file.buffer,
                    }),
                )
                .then(
                    () =>
                        `https://${this.bucketName}.s3.${this.region}.amazonaws.com/${randomName}`,
                );
        });
        return await Promise.all(urls);
    }
}
