import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ItemDto } from './dto/item.dto';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Item)
        private itemsRepository: Repository<Item>,
    ) { }

    async findAll(): Promise<Item[]> {
        return await this.itemsRepository.find();
    }

    async create(dto: ItemDto) {
        const exists = await this.itemsRepository.findOne(dto.barcode);
        if (exists) {
            throw new Error('Item already exists');
        }
        if (dto.price < 0 || dto.quantity < 0) {
            throw new Error('Price and quantity must be greater than 0');
        }
        const newItem = new Item();
        newItem.barcode = dto.barcode;
        newItem.name = dto.name;
        newItem.description = dto.description;
        newItem.price = dto.price;
        newItem.quantity = dto.quantity;
        await this.itemsRepository.save(newItem);
    }

    async update(barcode: number, dto: ItemDto): Promise<UpdateResult> {
        let toUpdate = new Item();
        toUpdate = await this.itemsRepository.findOne(barcode);
        if (dto.price < 0 || dto.quantity < 0) {
            throw new Error('Price and quantity must be greater than 0');
        }
        toUpdate.name = dto.name ? dto.name : toUpdate.name;
        toUpdate.description = dto.description ? dto.description : toUpdate.description;
        toUpdate.price = dto.price ? dto.price : toUpdate.price;
        toUpdate.quantity = dto.quantity ? dto.quantity : toUpdate.quantity;
        return await this.itemsRepository.update(barcode, toUpdate);
    }

    async delete(barcode: number): Promise<DeleteResult> {
        return await this.itemsRepository.delete(barcode);
    }
}
