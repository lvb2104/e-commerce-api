import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [
        // Setup connection to the database
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                url: configService.getOrThrow('URL_RAILWAY'),
                // host: configService.getOrThrow('MYSQL_HOST'),
                // port: configService.getOrThrow('MYSQL_LOCAL_PORT'),
                // username: configService.getOrThrow('MYSQL_USERNAME'),
                // password: configService.getOrThrow('MYSQL_PASSWORD'),
                // database: configService.getOrThrow('MYSQL_DATABASE'),
                autoLoadEntities: true,
                synchronize: true,
            }),
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}
