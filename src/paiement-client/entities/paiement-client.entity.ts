import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Client } from "src/client/entities/client.entity";
import { Vente } from "src/vente/entities/vente.entity";

export type PaiementClientDocument = HydratedDocument<PaiementClient>;

@Schema({timestamps:true})
export class PaiementClient {
    _id: string;

    @Prop({type:Date,required: true})
    date: Date;

    @Prop({type:Types.ObjectId,ref:Vente.name,required: true})
    vente: string;

    @Prop({type:Types.ObjectId,ref:Client.name,required: true})
    client: string;

    @Prop({type:Number,required: true})
    montant: number;
}

export const PaiementClientSchema = SchemaFactory.createForClass(PaiementClient);