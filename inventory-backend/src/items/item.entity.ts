import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Item {
    @PrimaryColumn()
    barcode: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    quantity: number;
}