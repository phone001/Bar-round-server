import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarModule } from './bar/bar.module';
import { CommonModule } from './common/common.module';
import { OrderModule } from './order/order.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './intercepter/logger.interceptor';
import { TableModule } from './table/table.module';
import { DrinkModule } from './drink/drink.module';
import { FoodModule } from './food/food.module';
import { LoggerModule } from './modules';

@Module({
  imports: [BarModule, CommonModule,LoggerModule, OrderModule, TableModule, DrinkModule, FoodModule],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor, // 전역 인터셉터로 등록
  },],
})
export class AppModule {}
