import { Controller } from '@nestjs/common';
import { DrinkService } from './drink.service';

@Controller('drink')
export class DrinkController {
  constructor(private readonly drinkService: DrinkService) {}
}
