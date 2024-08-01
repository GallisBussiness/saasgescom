import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsMongoId, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateParamDto {
    @ApiProperty({ example: 'shop', description: 'Le nom de la structure' })
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

    @IsPhoneNumber('SN')
    tel:string;

    @IsMongoId()
    user: string;
}
