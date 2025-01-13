import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';

enum UserRole {
    User,
    Seller,
    Admin,
}

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { unique: true })
    email: string;

    @Column('text', { nullable: true })
    password: string;

    @Column('text', { nullable: true })
    googleId: string;

    @Column('text', { unique: true })
    name: string;

    @Column('text', { nullable: true })
    phone: string;

    @Column('date', { nullable: true })
    dob: Date;

    @Column('text', { nullable: true })
    avatar: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.User,
    })
    role: UserRole;

    @Column('boolean', { default: false })
    verified: boolean;

    @Column('text', { nullable: true })
    address: string;

    @Column('boolean', { default: false })
    isTfaEnabled: boolean;

    @Column('text', { nullable: true })
    tfaSecret: string;

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

    @OneToMany((type) => Order, (order) => order.user)
    orders: Order[];
}
