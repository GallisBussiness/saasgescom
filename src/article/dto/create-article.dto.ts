import { IsMongoId, IsNumber, IsString } from "class-validator";

export class CreateArticleDto {
    @IsString()
    nom: string;

    @IsNumber()
    stock_seuil: number;

    @IsMongoId()
    famille: string;

    @IsMongoId()
    unite: string;

    @IsMongoId()
    user:string;
}
