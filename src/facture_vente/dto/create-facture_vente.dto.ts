import { IsDate, IsMongoId, IsNumber } from "class-validator";

export class CreateFactureVenteDto {
    @IsNumber()
    ht:number;

    @IsDate()
    date_echeance: string;

    @IsNumber()
    taxe: number;

    @IsMongoId()
    user: string;
}
