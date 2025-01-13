import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from './cache/cache.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { VouchersModule } from './vouchers/vouchers.module';
import { CategoriesModule } from './categories/categories.module';
import { FlashsalesModule } from './flashsales/flashsales.module';
import { FlashsaleItemsModule } from './flashsale-items/flashsale-items.module';
import { ItemsModule } from './items/items.module';
import { ItemImagesModule } from './item-images/item-images.module';
import { CategoryBannersModule } from './category-banners/category-banners.module';
import { OrderDetailsModule } from './order-details/order-details.module';

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
        ItemImagesModule,
        CategoryBannersModule,
        OrderDetailsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
