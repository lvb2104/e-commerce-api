import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flashsale {
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
