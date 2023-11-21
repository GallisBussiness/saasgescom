import { Injectable } from '@nestjs/common';
import { CreateFactureVenteDto } from './dto/create-facture_Vente.dto';
import { UpdateFactureVenteDto } from './dto/update-facture_Vente.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { FactureVente, FactureVenteDocument } from './entities/facture_Vente.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FactureVenteService extends AbstractModel<FactureVente,CreateFactureVenteDto,UpdateFactureVenteDto>{
  constructor(@InjectModel(FactureVente.name) private readonly factureVenteModel: Model<FactureVenteDocument>){
    super(factureVenteModel);
  }
}
