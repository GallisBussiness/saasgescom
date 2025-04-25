import { HttpException, Injectable } from '@nestjs/common';
import { CreatePaiementClientDto } from './dto/create-paiement-client.dto';
import { UpdatePaiementClientDto } from './dto/update-paiement-client.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { PaiementClient, PaiementClientDocument } from './entities/paiement-client.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PaiementClientService extends AbstractModel<PaiementClient,CreatePaiementClientDto,UpdatePaiementClientDto>{
  constructor(@InjectModel(PaiementClient.name) private readonly paiementClient: Model<PaiementClientDocument>){
    super(paiementClient);
  }

  async findByClient(client: string):Promise<PaiementClient[]>{
    try {
      return await this.paiementClient.find({client:client});
    } catch (error) {
      throw new HttpException(error.message,500);
    }
  }

  async findByVente(vente: string):Promise<PaiementClient[]>{
    try {
      return await this.paiementClient.find({vente:vente});
    } catch (error) {
      throw new HttpException(error.message,500);
    }
  }
}
