import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import telegramConfig from '../config/telegram.config';
import { TelegramService } from './telegram.service';

@Module({
  imports: [ConfigModule.forFeature(telegramConfig)],
  providers: [TelegramService],
  exports: [TelegramService],
})
export class TelegramModule {}
