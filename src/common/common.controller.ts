import { Controller, Get } from '@nestjs/common';

@Controller('common')
export class CommonController {

  @Get('health')
  healthCheck() {
    console.log("test");
    return { status: 'ok' };
  }
}
