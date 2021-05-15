import { AllExceptionsFilter } from '@common/filters';
import { configService } from '@config/config.service';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app
    .useGlobalPipes(new ValidationPipe({ whitelist: true }))
    .useGlobalFilters(new AllExceptionsFilter())
    .setGlobalPrefix('api/v1')
    .enableCors({ origin: '*' } as CorsOptions);

  await app.listen(configService.getPort());
}
bootstrap();
