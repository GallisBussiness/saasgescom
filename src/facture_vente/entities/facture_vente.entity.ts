import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { User } from "src/user/entities/user.entity";

export type FactureVenteDocument = HydratedDocument<FactureVente>;

@Schema({timestamps: true})
export class FactureVente {
    @Prop({type: String})
    ref: string;

    @Prop({type: Number,required: true})
    ht: number;

    @Prop({type: Date,required: true})
    date_echeance: string;

    @Prop({type: Number,required: true,default:0 })
    taxe: number;

    @Prop({type: Types.ObjectId,ref: User.name,required: true})
    user: User | Types.ObjectId;
}

export const FactureVenteSchema = SchemaFactory.createForClass(FactureVente);