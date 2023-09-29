import { Module } from '@nestjs/common';
import { ParamService } from './param.service';
import { ParamController } from './param.controller';

@Module({
  controllers: [ParamController],
  providers: [ParamService],
})
export class ParamModule {}
