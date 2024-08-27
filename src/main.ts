import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createEnvConfig } from 'config/create-env-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { foo } = createEnvConfig();
  console.log('fooValue:', foo);

  await app.listen(3000);
}
bootstrap();
