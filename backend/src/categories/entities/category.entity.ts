import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum CategoryStatus {
    Active,
    Inactive,
}

@Entity()
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column({
        type: 'enum',
        enum: CategoryStatus,
        default: CategoryStatus.Active,
    })
    status: CategoryStatus;

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
