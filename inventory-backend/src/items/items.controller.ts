import { Controller, Delete, Get, Post, Param, Body } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ItemDto } from './dto/item.dto';
import { ItemsService } from './items.service';
import { Item } from './item.entity';

@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService) { }
    
    @Get()
    async findAll(): Promise<Item[]> {
        return await this.itemsService.findAll();
    }

    @Delete('/:barcode')
    async delete(@Param('barcode') barcode: number): Promise<DeleteResult> {
        return await this.itemsService.delete(barcode);
    }

    @Post('/:barcode')
    async update(@Param('barcode') barcode: number, @Body() createItemDto: ItemDto): Promise<UpdateResult> {
        return await this.itemsService.update(barcode, createItemDto);
    }

    @Post() 
    async create(@Body() createItemDto: ItemDto): Promise<void> {
        return await this.itemsService.create({
            barcode: createItemDto.barcode,
            name: createItemDto.name,
            description: createItemDto.description,
            price: createItemDto.price,
            quantity: createItemDto.quantity
        });
    }

}
