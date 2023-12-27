import { IsInt, IsNumber, IsString } from "class-validator";
export class InsertCate {
    @IsString()
    productName: string

    @IsNumber()
    @IsInt()
    categoryId: number

    

}