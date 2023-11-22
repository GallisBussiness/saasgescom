import { IsMongoId } from "class-validator";

export class CreatePaymentDto {
    @IsMongoId()
    pack: string;

    @IsMongoId()
    user: string;
}
