import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { createEnvConfig } from 'config/create-env-config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load:[createEnvConfig]
  })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
