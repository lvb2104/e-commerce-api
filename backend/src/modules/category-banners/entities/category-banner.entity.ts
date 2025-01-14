import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../../categories/entities/category.entity';

@Entity()
export class CategoryBanner extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('int')
    position: number;

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

    @ManyToOne((type) => Category, (category) => category.categoryBanners)
    category: Category;
}
