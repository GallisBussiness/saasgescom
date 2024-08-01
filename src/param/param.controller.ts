import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, HttpException } from '@nestjs/common';
import { ParamService } from './param.service';
import { CreateParamDto } from './dto/create-param.dto';
import { UpdateParamDto } from './dto/update-param.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { existsSync, unlinkSync } from 'fs';

@Controller('param')
export class ParamController {
  constructor(private readonly paramService: ParamService) {}

  @Post()
  create(@Body() createParamDto: CreateParamDto) {
    return this.paramService.create(createParamDto);
  }

  @Get()
  findAll() {
    return this.paramService.findAll();
  }

  @Get('byuser/:id')
  findByUser(@Param('id') id: string) {
    return this.paramService.findByUser(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paramService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('logo'))
  async update(@UploadedFile() logo: Express.Multer.File,@Param('id') id: string, @Body() updateParamDto: UpdateParamDto) {
    if(logo){
      updateParamDto.logo  = logo.filename;
      const em = await this.paramService.update(id,updateParamDto);
      if(em && existsSync("uploads/" + em.logo)){
        unlinkSync("uploads/" + em.logo);
      }
      return em;
    }
   throw new HttpException("logo Non Uploade !!",500);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paramService.remove(id);
  }
}
