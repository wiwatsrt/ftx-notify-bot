import { Test, TestingModule } from '@nestjs/testing';
import { TelegramModule } from 'src/telegram/telegram.module';
import { FtxService } from './ftx.service';

describe('FtxService', () => {
  let service: FtxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TelegramModule],
      providers: [FtxService],
    }).compile();

    service = module.get<FtxService>(FtxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
