import { IsMongoId, IsNumber, IsString } from "class-validator";

export class CreatePaiementClientDto {
    @IsString()
    date:string;

    @IsMongoId()
    vente:string;
    
    @IsNumber()
    montant:number;

    @IsMongoId()
    client:string;
}
