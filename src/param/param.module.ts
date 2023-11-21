import { Module } from '@nestjs/common';
import { ParamService } from './param.service';
import { ParamController } from './param.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Param, ParamSchema } from './entities/param.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: Param.name,schema: ParamSchema}])],
  controllers: [ParamController],
  providers: [ParamService],
})
export class ParamModule {}
