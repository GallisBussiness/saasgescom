import { IsMongoId, IsString } from "class-validator";

export class CreateUniteDto {
    @IsString()
    nom: string;

    @IsMongoId()
    user: string;
}
