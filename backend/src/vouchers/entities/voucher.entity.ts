import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum VoucherType {
    Shipping,
    Discount,
}

@Entity()
export class Voucher {
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
