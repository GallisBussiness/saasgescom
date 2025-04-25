import { IsDate, IsNumber, IsObject, IsString } from "class-validator";

export class CreateJournalDto {
    @IsDate()
    date:Date;

    @IsObject()
    user:object;

    @IsString()
    method:string;

    @IsString()
    url:string;

    @IsNumber()
    status:number;
}
