import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FlashsaleItem } from '../../flashsale-items/entities/flashsale-item.entity';
import { Item } from '../../items/entities/item.entity';
import { Order } from '../../orders/entities/order.entity';

@Entity()
export class OrderDetail {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('int')
    quantity: number;

    @Column('float')
    price: number;

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
