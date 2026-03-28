import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import OrderDto from '../dto/orderDto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  /**
   * 주문 생성
   * @param orderDto 주문 생성에 필요한 정보가 담긴 DTO
   * @returns 생성된 주문 정보
   */
  @Post()
  async createOrder(@Body() orderDto: OrderDto) {
    const createdOrder = await this.orderService.createOrder(orderDto);
  }

  @Get()
  async getOrders() {

  }
}
