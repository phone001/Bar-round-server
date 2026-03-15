import { Controller, Get } from '@nestjs/common';
import { DrinkService } from './drink.service';

@Controller('drink')
export class DrinkController {
  constructor(private readonly drinkService: DrinkService) {}

  @Get()
  getDrinks() {
    return this.drinkService.getDrinks();
  }
}
