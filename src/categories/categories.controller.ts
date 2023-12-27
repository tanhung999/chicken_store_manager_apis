import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { InsertCate } from './dto/insert.dto';
import { UpdateCate } from './dto/update.dto';

@Controller('categories')
export class CategoriesController {
    constructor (private categoriesService: CategoriesService){}

    @Get('all')
    getAllCate(){
        return this.categoriesService.getAllCategories()
    }
    @Get('byId/:id')
    getCateById(@Param('id', ParseIntPipe) categoryId: number){
        return this.categoriesService.getCategoryById(categoryId)
    }
    @Post('create-category')
    createCategory(
        @Body() insertCate: InsertCate
    ){
        return this.categoriesService.createCategory(insertCate)
    }
    @Patch('update-category/:id')
    updateCategory(
        @Body() updateCategory: UpdateCate,
        @Param('id', ParseIntPipe)categoryId: number 
    ){
        return this.categoriesService.updateCategory(updateCategory,categoryId)
    }

}
