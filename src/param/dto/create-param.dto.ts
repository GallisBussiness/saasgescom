import { IsEmail, IsMongoId, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateParamDto {
    @IsString()
    nom: string;

    @IsNumber()
    tva: number;

    @IsString()
    @IsOptional()
    logo: string;

    @IsString()
    @IsOptional()
    num_siret: string;


    @IsString()
    @IsOptional()
    ninea: string;

    @IsEmail()
    email:string;

    @IsMongoId()
    user: string;

}
