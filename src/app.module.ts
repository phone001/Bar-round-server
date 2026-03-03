import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarModule } from './bar/bar.module';
import { CommonModule } from './common/common.module';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { loggerFormat } from 'util/format/text-format';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [BarModule, CommonModule,WinstonModule.forRoot({
    transports:[new winston.transports.Console({format:winston.format.combine(winston.format.timestamp({format:'YYYY-MM-DD HH:mm:ss'}),loggerFormat)})]
  }), OrderModule,ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
