import {
    Injectable,
    OnApplicationBootstrap,
    OnApplicationShutdown,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from 'redis';

@Injectable()
export class CacheService
    implements OnApplicationBootstrap, OnApplicationShutdown
{
    private redisClient: ReturnType<typeof createClient>;
    constructor(private readonly configService: ConfigService) {}

    async onApplicationBootstrap() {
        this.redisClient = createClient({
            username: this.configService.getOrThrow('REDIS_USERNAME'),
            password: this.configService.getOrThrow('REDIS_PASSWORD'),
            socket: {
                host: this.configService.getOrThrow('REDIS_HOST'),
                port: this.configService.getOrThrow('REDIS_PORT'),
            },
        });

        this.redisClient.on('error', (err: any) =>
            console.log('Redis Client Error', err),
        );
        await this.redisClient.connect();
    }

    async onApplicationShutdown() {
        await this.redisClient.quit();
    }
}
