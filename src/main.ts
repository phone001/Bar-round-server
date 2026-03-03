import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger} from "./../util/logger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger:Logger
  });

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });



  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
