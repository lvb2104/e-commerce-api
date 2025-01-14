import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from '../../orders/entities/order.entity';

enum VoucherType {
    Shipping,
    Discount,
}

@Entity()
export class Voucher extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    code: string;

    @Column({ type: 'enum', enum: VoucherType, default: VoucherType.Discount })
    type: VoucherType;

    @Column('text', { nullable: true })
    note: string;

    @Column('float')
    discount: number;

    @Column('float')
    max: number;

    @Column('float')
    min: number;

    @Column('int')
    quantity: number;

    @Column('timestamp')
    startTime: Date;

    @Column('timestamp')
    endTime: Date;

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

    @OneToMany((type) => Order, (order) => order.voucher)
    orders: Order[];
}
