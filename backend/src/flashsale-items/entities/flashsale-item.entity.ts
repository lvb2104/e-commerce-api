import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Flashsale } from '../../flashsales/entities/flashsale.entity';
import { Item } from '../../items/entities/item.entity';
import { OrderDetail } from '../../order-details/entities/order-detail.entity';

@Entity()
export class FlashsaleItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('float')
    discount: number;

    @Column('int')
    quantity: number;

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

    @ManyToOne((type) => Flashsale, (flashSale) => flashSale.flashSaleItems)
    flashSale: Flashsale;

    @ManyToOne((type) => Item, (item) => item.flashSaleItems)
    item: Item;

    @OneToMany(
        (type) => OrderDetail,
        (orderDetail) => orderDetail.flashSaleItem,
    )
    orderDetails: OrderDetail[];
}
