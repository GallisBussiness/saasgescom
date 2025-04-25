import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaiementClientService } from './paiement-client.service';
import { CreatePaiementClientDto } from './dto/create-paiement-client.dto';
import { UpdatePaiementClientDto } from './dto/update-paiement-client.dto';

@Controller('paiement-client')
export class PaiementClientController {
  constructor(private readonly paiementClientService: PaiementClientService) {}

  @Post()
  create(@Body() createPaiementClientDto: CreatePaiementClientDto) {
    return this.paiementClientService.create(createPaiementClientDto);
  }

  @Get('user/:userId')
  findAll(@Param('userId') userId: string) {
    return this.paiementClientService.findByUserId(userId);
  }

  @Get('byclient/:id')
  findByClient(@Param('id') id: string) {
    return this.paiementClientService.findByClient(id);
  }

  @Get('byvente/:id')
  findByVente(@Param('id') id: string) {
    return this.paiementClientService.findByVente(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paiementClientService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaiementClientDto: UpdatePaiementClientDto) {
    return this.paiementClientService.update(id, updatePaiementClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paiementClientService.remove(id);
  }
}
