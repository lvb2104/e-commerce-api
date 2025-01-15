import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryBanner } from '../../category-banners/entities/category-banner.entity';
import { Item } from '../../items/entities/item.entity';

export enum CategoryStatus {
    Active,
    Inactive,
}

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    title: string;

    @Column({
        type: 'enum',
        enum: CategoryStatus,
        default: CategoryStatus.Active,
    })
    status: CategoryStatus;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    created_at: Date;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
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
