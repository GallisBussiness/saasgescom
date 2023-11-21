import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { User } from "src/user/entities/user.entity";

export type UniteDocument = HydratedDocument<Unite>;

@Schema({timestamps: true})
export class Unite {
    @Prop({type: String,required: true})
    nom: string;

    @Prop({type: Types.ObjectId,ref: User.name,required: true})
    user: string;
}

export const UniteSchema = SchemaFactory.createForClass(Unite);