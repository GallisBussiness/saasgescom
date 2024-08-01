import { HttpException, Injectable } from '@nestjs/common';
import { CreateParamDto } from './dto/create-param.dto';
import { UpdateParamDto } from './dto/update-param.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { InjectModel } from '@nestjs/mongoose';
import { Param, ParamDocument } from './entities/param.entity';
import { Model } from 'mongoose';

@Injectable()
export class ParamService extends AbstractModel<Param,CreateParamDto,UpdateParamDto>{
constructor(@InjectModel(Param.name) private readonly paramModel: Model<ParamDocument>){
  super(paramModel);
}

async findByUser(id: string): Promise<Param> {
  try {
    return await this.paramModel.findOne({user: id});
  } catch (error) {
    throw new HttpException(error.message,500);
  }
}
}
