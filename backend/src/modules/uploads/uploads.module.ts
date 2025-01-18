import { Module } from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { UploadsController } from './uploads.controller';
import {
    ThrottlerGuard,
    ThrottlerModule,
    ThrottlerModuleOptions,
} from '@nestjs/throttler';
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [
        ThrottlerModule.forRootAsync({
            useFactory: (
                configService: ConfigService,
            ): ThrottlerModuleOptions => [
                {
                    ttl: configService.getOrThrow('UPLOADS_THROTTLE_TTL'),
                    limit: configService.getOrThrow('UPLOADS_THROTTLE_LIMIT'),
                },
            ],
            inject: [ConfigService],
        }),
    ],
    controllers: [UploadsController],
    providers: [
        UploadsService,
        {
            provide: 'APP_GUARD',
            useClass: ThrottlerGuard,
        },
    ],
    exports: [UploadsService],
})
export class UploadsModule {}
