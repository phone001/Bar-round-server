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


@Injectable()
export default class DatabaseConfig{
    private readonly logger  = new Logger(DatabaseConfig.name);
    private DBConfig:DataSource
    constructor(private configService: ConfigService) {
        this.DBConfig = new DataSource({
                type: 'mysql',
                database: this.configService.get('DATABASE_NAME'),
                host: this.configService.get('HOST'),
                port: this.configService.get('DB_PORT'),
                username: this.configService.get('USER_NAME'),
                password: this.configService.get('PASSWORD') as string,
                synchronize: true, // 해당 항목이 있어야 테이블이 생성됨, 운영에서는 데이터 손실 방지 위해 false로 설정
                entities:[Order,Drink_Feeling_Map,Drink,Food,ORDER_DETAIL,Table,Feeling,Liquor,SCENT,Drink_Scent_Map]
        })
        this.DBConfig.initialize().then(()=>console.log("데이터 초기화")).catch((e)=>console.error("에러발생",e))
    }
}