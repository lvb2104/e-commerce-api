import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
