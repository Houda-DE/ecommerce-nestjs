import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Role{
    ADMIN = 'admin',
    EMPLOYEE = 'employee'
}

@Entity("User")
export class User{

    @PrimaryGeneratedColumn("uuid")
    id : number

    @Column({unique : true})
    firstName : string

    @Column({unique : true})
    lastName : string

    @Column({unique : true})
    email : string

    @Column()
    password : string

    @Column({type:"enum" ,enum : Role , default : Role.EMPLOYEE})
    role : Role
}