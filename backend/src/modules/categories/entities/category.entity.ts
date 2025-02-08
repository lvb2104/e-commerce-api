import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Item } from '../../items/entities/item.entity';

export enum CategoryStatus {
    Active,
    Inactive,
}

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 255, unique: true })
    name: string;

    @Column({
        type: 'enum',
        enum: CategoryStatus,
        default: CategoryStatus.Active,
    })
    status: CategoryStatus;

    @Column('text')
    url: string;

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

    @OneToMany((type) => Item, (item) => item.category)
    items: Item[];
}
