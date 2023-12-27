import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertCate } from './dto/insert.dto';
import { UpdateCate } from './dto/update.dto';

@Injectable()
export class CategoriesService {
    constructor(private prismaService: PrismaService) {}

    async getAllCategories() {
        try {
            const categories = await this.prismaService.categories.findMany();
            return { data: categories,
                message: 'success',
                status: HttpStatus.OK
            
            };
        } catch (error) {
            throw new Error(`Error while fetching categories: ${error.message}`);
        }
    }

    async getCategoryById(categoryId: number) {
        try {
            const category = await this.prismaService.categories.findUnique({ where: { categoryId } });
            if (!category) {
                throw new NotFoundException('Category not found');
            }
            return { 
                data: category,
                message: 'success',
                status: HttpStatus.OK
            };
        } catch (error) {
            throw new Error(`Error while fetching category: ${error.message}`);
        }
    }
    async createCategory (insertCate: InsertCate){
        try {
            await this.prismaService.categories.create({
                data: {
                    ...insertCate
                }
            })
            return {
            
                message: 'success',
                status: HttpStatus.OK
            }
        } catch (error) {
            throw new Error(`Error while fetching category: ${error.message}`);
        }
        
    }
    async updateCategory (updateCategory: UpdateCate, categoryId: number) {
        try {
            await this.prismaService.categories.update({
                where: {categoryId},
                data: {
                    ...updateCategory
                }
            })
            return {
                message: 'success',
                status: HttpStatus.OK
            }
        } catch (error) {
            throw new Error(`Error while fetching category: ${error.message}`);
        }
    }
    async deleteCategory (categoryId: number) {
        try {
            await this.prismaService.categories.delete({
                where: {categoryId},
            })
            return {
                message: 'success',
                status: HttpStatus.OK
            }
        } catch (error) {
            throw new Error(`Error while fetching category: ${error.message}`);
        }
    }
}

