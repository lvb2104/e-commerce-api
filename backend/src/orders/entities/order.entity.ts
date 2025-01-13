import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
