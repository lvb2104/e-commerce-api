import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { FlashsaleItem } from '../../flashsale-items/entities/flashsale-item.entity';
import { ItemImage } from '../../item-images/entities/item-image.entity';
import { OrderDetail } from '../../order-details/entities/order-detail.entity';

enum ItemStatus {
    Active,
    Inactive,
}

@Entity()
export class Item extends BaseEntity {
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

    @Column('text')
    avatar: string;

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
        default: () => 'CURRENT_TIMESTAMP',
    })
    created_at: Date;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
        onUpdate: 'CURRENT_TIMESTAMP',
    })
    modified_at: Date;

    @ManyToOne((type) => Category, (category) => category.items)
    category: Category;

    @OneToMany((type) => FlashsaleItem, (flashSaleItem) => flashSaleItem.item)
    flashSaleItems: FlashsaleItem[];

    @OneToMany((type) => ItemImage, (itemImage) => itemImage.item)
    itemImages: ItemImage[];

    @OneToMany((type) => OrderDetail, (orderDetail) => orderDetail.item)
    orderDetails: OrderDetail[];
}
