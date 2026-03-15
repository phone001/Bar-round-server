import {DataSource} from 'typeorm'
import { Injectable,Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Order } from 'src/entities/order.entity';
import { Drink_Feeling_Map } from 'src/entities/drink_feeling_map.entity';
import { Drink } from 'src/entities/drink.entity';
import { Food } from 'src/entities/food.entity';
import { ORDER_DETAIL } from 'src/entities/order-detail.entity';
import { Table } from 'src/entities/table.entity';
import { Feeling } from 'src/entities/feeling.entity';
import { Liquor } from 'src/entities/liquor.entity';
import { SCENT } from 'src/entities/scent';
import { Drink_Scent_Map } from 'src/entities/drink_scent_map';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';


@Injectable()
export default class DatabaseConfig implements TypeOrmOptionsFactory{

    constructor(private configService: ConfigService) {}
    // 이 메서드가 반드시 존재해야 하며, DB 설정 객체를 반환해야 합니다.
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql', // 사용하는 DB 종류
      host: this.configService.get<string>('DB_HOST', 'localhost'),
      port: this.configService.get<number>('DB_PORT', 3306),
      username: this.configService.get<string>('DB_USERNAME', 'root'),
      password: this.configService.get<string>('DB_PASSWORD', 'password'),
      database: this.configService.get<string>('DB_DATABASE', 'test_db'),
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: this.configService.get<boolean>('DB_SYNC', true), 
      // 주의: 실제 운영(Production) 환경에서는 synchronize를 무조건 false로 해야 합니다.
    };
  }
}