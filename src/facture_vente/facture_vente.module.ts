import { Module } from '@nestjs/common';
import { FactureVenteService } from './facture_vente.service';
import { FactureVenteController } from './facture_vente.controller';
import { FactureVente, FactureVenteSchema } from './entities/facture_vente.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:FactureVente.name,schema: FactureVenteSchema}])],
  controllers: [FactureVenteController],
  providers: [FactureVenteService],
})
export class FactureVenteModule {}
