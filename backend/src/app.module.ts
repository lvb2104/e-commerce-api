import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from './cache/cache.module';
import { OrdersModule } from './modules/orders/orders.module';
import { UsersModule } from './modules/users/users.module';
import { VouchersModule } from './modules/vouchers/vouchers.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { FlashsalesModule } from './modules/flashsales/flashsales.module';
import { FlashsaleItemsModule } from './modules/flashsale-items/flashsale-items.module';
import { ItemsModule } from './modules/items/items.module';
import { CategoryBannersModule } from './modules/category-banners/category-banners.module';
import { OrderDetailsModule } from './modules/order-details/order-details.module';
import { UploadsModule } from './modules/uploads/uploads.module';

@Module({
    imports: [
        // Load the configuration file
        ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,
        CacheModule,
        OrdersModule,
        UsersModule,
        VouchersModule,
        CategoriesModule,
        FlashsalesModule,
        FlashsaleItemsModule,
        ItemsModule,
        CategoryBannersModule,
        OrderDetailsModule,
        UploadsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
