import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1736944394414 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE category CHANGE name title TEXT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE category CHANGE title name TEXT`);
    }
}
