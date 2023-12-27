import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
    constructor (private prismaService: PrismaService){}

    async getAllProduct(){
        try {
            const data =await this.prismaService.products.findMany()
            return {
                data: data,
                message: 'success',
                status: HttpStatus.OK
            }

        } catch (error) {
            throw new Error(`Error while fetching category: ${error.message}`);
        }
    }
    async getProductById (productId: number){
        try {
            const data = await this.prismaService.products.findUnique({
                where: {productId}
            })
            return {
                data: data,
                message: 'success',
                status: HttpStatus.OK
            }
        } catch (error) {
            throw new Error(`Error while fetching category: ${error.message}`);
        }
    }
    async createProduct () {
        
    }
}
