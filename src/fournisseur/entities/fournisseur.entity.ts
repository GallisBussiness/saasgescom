import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { User } from "src/user/entities/user.entity";

export type FournisseurDocument = HydratedDocument<Fournisseur>;

@Schema({timestamps: true})
export class Fournisseur {
 @Prop({type: String,required: true})
 nom: string;

 @Prop({type: String})
 tel: string;

 @Prop({type: String})
 addr: string;

 @Prop({type: Types.ObjectId,ref: User.name,required: true})
 user: string;
}

export const FournisseurSchema = SchemaFactory.createForClass(Fournisseur);