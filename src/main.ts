import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const fooValue = configService.get('foo');
  console.log('fooValue:', fooValue);

  await app.listen(3000);
}
bootstrap();
