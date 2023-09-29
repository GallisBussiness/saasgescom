import { Injectable } from '@nestjs/common';
import { CreateUniteDto } from './dto/create-unite.dto';
import { UpdateUniteDto } from './dto/update-unite.dto';

@Injectable()
export class UniteService {
  create(createUniteDto: CreateUniteDto) {
    return 'This action adds a new unite';
  }

  findAll() {
    return `This action returns all unite`;
  }

  findOne(id: number) {
    return `This action returns a #${id} unite`;
  }

  update(id: number, updateUniteDto: UpdateUniteDto) {
    return `This action updates a #${id} unite`;
  }

  remove(id: number) {
    return `This action removes a #${id} unite`;
  }
}
