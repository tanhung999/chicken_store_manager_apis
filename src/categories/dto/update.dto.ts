import { IsOptional, IsString } from "class-validator";

export class UpdateCate {
    @IsString()
    @IsOptional()
    categoryName: string
}