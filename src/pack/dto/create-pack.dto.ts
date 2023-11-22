import { IsNumber, IsString } from "class-validator";

export class CreatePackDto {
    @IsString()
    nom: string;

    @IsNumber()
    nb_jours:number;
}
