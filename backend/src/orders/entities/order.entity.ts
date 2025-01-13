import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderDetail } from '../../order-details/entities/order-detail.entity';
import { User } from '../../users/entities/user.entity';
import { Voucher } from '../../vouchers/entities/voucher.entity';

enum OrderStatus {
    Waiting,
    Shipping,
    Canceled,
    Closed,
}

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('float')
    shippingPrice: number;

    @Column('float')
    itemsPrice: number;

    @Column('float')
    total: number;

    @Column('float')
    addressShipping: string;

    @Column({
        type: 'enum',
        enum: OrderStatus,
        default: OrderStatus.Waiting,
    })
    status: OrderStatus;

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

    @OneToMany((type) => OrderDetail, (orderDetail) => orderDetail.order)
    orderDetails: OrderDetail[];

    @ManyToOne((type) => User, (user) => user.orders)
    user: User;

    @ManyToOne((type) => Voucher, (voucher) => voucher.orders)
    voucher: Voucher;
}
