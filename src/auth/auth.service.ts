import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()

export class AuthService {
 constructor(
  @InjectRepository(User)
  private userRepository : Repository<User>
 ){}

async signup (createAuthDto : CreateAuthDto) {

  try{
    const user = await this.userRepository.create(
      {
        firstName : createAuthDto.firstName,
        lastName : createAuthDto.lastName,
        email : createAuthDto.email,
        password : createAuthDto.password,
      }
    )
  }

  catch{}

}

}
