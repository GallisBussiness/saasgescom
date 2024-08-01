import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { User } from "src/user/entities/user.entity";

export type FamilleDocument = HydratedDocument<Famille>;

@Schema({timestamps: true})
export class Famille {
 @Prop({type: String,required: true,unique: true})
 nom: string;

 @Prop({type: Types.ObjectId,ref:User.name,required: true})
 user: string;
}

export const FamilleSchema = SchemaFactory.createForClass(Famille);