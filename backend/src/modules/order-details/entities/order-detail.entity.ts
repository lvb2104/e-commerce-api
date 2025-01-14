import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Item } from '../../items/entities/item.entity';
import { FlashsaleItem } from '../../flashsale-items/entities/flashsale-item.entity';
import { Order } from '../../orders/entities/order.entity';

@Entity()
export class OrderDetail extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('int')
    quantity: number;

    @Column('float')
    price: number;

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

    @ManyToOne(
        (type) => FlashsaleItem,
        (flashSaleItem) => flashSaleItem.orderDetails,
    )
    flashSaleItem: FlashsaleItem;

    @ManyToOne((type) => Item, (item) => item.orderDetails)
    item: Item;

    @ManyToOne((type) => Order, (order) => order.orderDetails)
    order: Order;
}
