import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum ItemStatus {
    Active,
    Inactive,
}

@Entity()
export class Item {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('text')
    barcode: string;

    @Column('float')
    importPrice: number;

    @Column('float')
    price: number;

    @Column('float')
    weight: number;

    @Column('int')
    quantity: number;

    @Column('text', { nullable: true })
    description: string;

    @Column({
        type: 'enum',
        enum: ItemStatus,
        default: ItemStatus.Active,
    })
    status: ItemStatus;

    @Column('boolean', { default: false })
    isSale: boolean;

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
