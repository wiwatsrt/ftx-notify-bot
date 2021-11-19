import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import ftxConfig from '../config/ftx.config';
import { TelegramModule } from '../telegram/telegram.module';
import { FtxService } from './ftx.service';

@Module({
  imports: [ConfigModule.forFeature(ftxConfig), TelegramModule],
  providers: [FtxService],
})
export class FtxModule {}
