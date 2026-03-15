import { Injectable} from '@nestjs/common';
import { Drink } from 'src/entities/drink.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DrinkService {
constructor(
    // 이 데코레이터와 타입이 정확히 작성되어야 에러가 사라집니다.
    @InjectRepository(Drink)
    private readonly drinkRepository: Repository<Drink>, 
  ) {}

    /**
     * 음료 조회
     */
    public getDrinks() {
        return this.drinkRepository.find();
    }

}
