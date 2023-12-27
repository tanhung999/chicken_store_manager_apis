import { IsString } from "class-validator";

export class InsertCate {
    @IsString()
    categoryName: string

}