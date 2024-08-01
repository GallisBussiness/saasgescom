import { Module } from '@nestjs/common';
import { ParamService } from './param.service';
import { ParamController } from './param.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Param, ParamSchema } from './entities/param.entity';
import { diskStorage } from 'multer';
import { MulterModule } from '@nestjs/platform-express';

const storage = diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + '-' + uniqueSuffix + '-' + file.originalname,
    );
  },
});

@Module({
  imports: [MongooseModule.forFeature([{name: Param.name,schema: ParamSchema}]),
  MulterModule.register({
    storage
  })
],
  controllers: [ParamController],
  providers: [ParamService],
})
export class ParamModule {}
