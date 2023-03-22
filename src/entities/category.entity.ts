import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Category")
export class Category{

    @PrimaryGeneratedColumn("increment")
    id : number

    @Column({unique : true})
    name : string

}