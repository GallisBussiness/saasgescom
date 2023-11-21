import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { User } from "src/user/entities/user.entity";

export type ParamDocument = HydratedDocument<Param>

@Schema({timestamps:true})
export class Param {
@Prop({type: String,required: true})
nom:string;

@Prop({type:Number, required: true, default:18})
tva: number;

@Prop({type: String})
logo: string;

@Prop({type: String})
num_siret: string;

@Prop({type:String})
ninea: string;

@Prop({type:String})
email: string;
@Prop({type: Types.ObjectId,ref: User.name,required: true})
user: string | User;
}

export const ParamSchema = SchemaFactory.createForClass(Param);