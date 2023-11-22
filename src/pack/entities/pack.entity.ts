import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PackDocument = HydratedDocument<Pack>;

@Schema({timestamps: true})
export class Pack {
    @Prop({type: String,required: true})
    nom: string;

    @Prop({type: Number,required: true,default:0})
    nb_jours: number;
}

export const PackSchema = SchemaFactory.createForClass(Pack);
