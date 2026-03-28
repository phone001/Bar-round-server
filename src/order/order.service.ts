import { Injectable } from '@nestjs/common';
import OrderDto from '../dto/orderDto';
import { Repository } from 'typeorm'
import { Order } from 'src/entities/order.entity';
import OrderDomain from '../domain/orderDomain';
import { InjectRepository } from '@nestjs/typeorm';
import { ORDER_DETAIL } from 'src/entities/order-detail.entity';
import OrderItemDto from 'src/dto/orderItemDto';

@Injectable()
export class OrderService {
    constructor( @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
        @InjectRepository(ORDER_DETAIL)
        private readonly orderDetailRepository: Repository<ORDER_DETAIL>
    ) {}

    /**
     * 주문 저장
     * @param orderDto 
     */
    async createOrder(orderDto: OrderDto) {

        const savedOrder:OrderDomain = await this.orderRepository.save({tableId: orderDto.tableId});

        // orderDto의 orderItems에 저장된 orderId를 방금 저장한 주문의 orderId로 설정
        orderDto.orderItems.forEach((orderItem:OrderItemDto)=>{ orderItem.orderId = savedOrder.orderId })

        this.orderDetailRepository.save(orderDto.orderItems)
    }
}
