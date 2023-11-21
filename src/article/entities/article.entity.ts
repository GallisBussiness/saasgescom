import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Famille } from "src/famille/entities/famille.entity";
import { Unite } from "src/unite/entities/unite.entity";

export type ArticleDocument = HydratedDocument<Article>;

@Schema({timestamps: true})
export class Article {
    @Prop({type: String,required: true})
    ref: string;

    @Prop({type: String,required: true,unique: true})
    nom: string;

    @Prop({type: Number,required: true,default:0})
    stock_seuil: number;

    @Prop({type: Types.ObjectId,ref: Famille.name,required: true})
    famille: string;

    @Prop({type:Types.ObjectId,ref:Unite.name,required: true})
    unite: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
