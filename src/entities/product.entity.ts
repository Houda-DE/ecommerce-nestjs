import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Product")
export class Product{

    @PrimaryGeneratedColumn('increment')
    id : number

    @Column({unique : true})
    name : string

    @Column()
    price : number

    @Column()
    quantity : number

}