import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarModule } from './bar/bar.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [BarModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
