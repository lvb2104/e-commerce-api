import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryBanner } from '../../category-banners/entities/category-banner.entity';
import { Item } from '../../items/entities/item.entity';

export enum CategoryStatus {
    Active,
    Inactive,
}

@Entity()
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column({
        type: 'enum',
        enum: CategoryStatus,
        default: CategoryStatus.Active,
    })
    status: CategoryStatus;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    created_at: Date;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    modified_at: Date;

    @OneToMany(
        (type) => CategoryBanner,
        (categoryBanner) => categoryBanner.category,
    )
    categoryBanners: CategoryBanner[];

    @OneToMany((type) => Item, (item) => item.category)
    items: Item[];
}
