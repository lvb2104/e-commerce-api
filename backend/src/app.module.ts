import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from './cache/cache.module';

@Module({
    imports: [
        // Load the configuration file
        ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,
        CacheModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
