import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator"
import { Role } from "src/entities/user.entity"

export class CreateAuthDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    firstName : string

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    lastName : string

    @IsNotEmpty()
    @IsEmail()
    email : string

    @MinLength(8)
    password : string

}
