import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum State{
    NOT_VALIDATED = 'not_validated',
    VALIDATED = 'validated',
    DELIVRED = 'delivred',
}

@Entity("Commande")
export class Commande{

    @PrimaryGeneratedColumn("increment")
    id : number

    @Column()
    date : Date

    @Column()
    totalPrice : number

    @Column()
    clientFName : string

    @Column()
    clientLName : string

    @Column()
    clientPhone : number

    @Column({type : "enum" , enum : State , default : State.NOT_VALIDATED})
    state : State

}