import { Module } from '@nestjs/common';
import { UniteService } from './unite.service';
import { UniteController } from './unite.controller';

@Module({
  controllers: [UniteController],
  providers: [UniteService],
})
export class UniteModule {}
