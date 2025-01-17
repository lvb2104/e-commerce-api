import { Injectable } from '@nestjs/common';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { OrderDetailRepository } from './order-details.repository';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class OrderDetailsService {
    constructor(
        @InjectRepository(OrderDetailRepository)
        private readonly orderDetailRepository: OrderDetailRepository,
    ) {}

    create(createOrderDetailDto: CreateOrderDetailDto) {
        return 'This action adds a new orderDetail';
    }

    findAll() {
        return `This action returns all orderDetails`;
    }

    findOne(id: number) {
        return `This action returns a #${id} orderDetail`;
    }

    update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
        return `This action updates a #${id} orderDetail`;
    }

    remove(id: number) {
        return `This action removes a #${id} orderDetail`;
    }
}
