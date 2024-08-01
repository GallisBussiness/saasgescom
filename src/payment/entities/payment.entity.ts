import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { HydratedDocument, Types } from "mongoose";
import { Pack } from "src/pack/entities/pack.entity";
import { User } from "src/user/entities/user.entity";

export type PaymentDocument = HydratedDocument<Payment>;

@Schema({timestamps: true})
export class Payment {
    @Prop({toString,required:true})
    ref: string;

    @Prop({type: Types.ObjectId,ref: Pack.name,required: true})
    pack: Types.ObjectId;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
