import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { FlashsaleItem } from '../../flashsale-items/entities/flashsale-item.entity';

@Entity()
export class Flashsale extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('text', { nullable: true })
    description: string;

    @Column('timestamp')
    startSale: Date;

    @Column('timestamp')
    endSale: Date;

    @Column('text')
    flashSaleBanner: string;

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
        (type) => FlashsaleItem,
        (flashSaleItem) => flashSaleItem.flashSale,
    )
    flashSaleItems: FlashsaleItem[];
}
