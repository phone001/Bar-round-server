import { Injectable} from '@nestjs/common';
import { Drink } from 'src/entities/drink.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DrinkService {
     @InjectRepository(Drink)
    private readonly drinkRepository: any;
    constructor() {
        this.drinkRepository = Repository<Drink>;
    }
    /**
     * 음료 조회
     */
    public getDrinks() {
        return this.drinkRepository.find();
    }

}
