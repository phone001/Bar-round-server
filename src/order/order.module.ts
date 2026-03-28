import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/entities/order.entity';
import { ORDER_DETAIL } from 'src/entities/order-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, ORDER_DETAIL])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
