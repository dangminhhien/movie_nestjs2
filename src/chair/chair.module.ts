import { Module } from '@nestjs/common';
import { ChairService } from './chair.service';
import { ChairController } from './chair.controller';

@Module({
  providers: [ChairService],
  controllers: [ChairController]
})
export class ChairModule {}
