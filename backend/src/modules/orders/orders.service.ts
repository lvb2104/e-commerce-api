import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderRepository } from './orders.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(OrderRepository)
        private readonly orderRepository: OrderRepository,
    ) {}

    create(createOrderDto: CreateOrderDto) {
        return 'This action adds a new order';
    }

    findAll() {
        return `This action returns all orders`;
    }

    findOne(id: number) {
        return `This action returns a #${id} order`;
    }

    update(id: number, updateOrderDto: UpdateOrderDto) {
        return `This action updates a #${id} order`;
    }

    remove(id: number) {
        return `This action removes a #${id} order`;
    }
}
