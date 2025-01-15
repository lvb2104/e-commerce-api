import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

export default new DataSource({
    type: 'mysql',
    url: process.env.URL_RAILWAY,
    entities: ['dist/src/**/**/**/*.entity{.ts,.js}'],
    migrations: ['dist/src/database/migrations/*{.ts,.js}'],
    migrationsTableName: 'custom_migrations_table',
    synchronize: false,
});
