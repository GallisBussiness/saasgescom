import { Module } from '@nestjs/common';
import { PackService } from './pack.service';
import { PackController } from './pack.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pack, PackSchema } from './entities/pack.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:Pack.name,schema: PackSchema}])],
  controllers: [PackController],
  providers: [PackService],
})
export class PackModule {}
