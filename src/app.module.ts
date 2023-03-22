import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { CommandeModule } from './commande/commande.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Product } from './entities/product.entity';
import { Commande } from './entities/commande.entity';
import { Category } from './entities/category.entity';

@Module({
  imports: [AuthModule, UserModule, ProductModule, CategoryModule, CommandeModule , TypeOrmModule.forRoot({
    type : "mysql",
    username : "root",
    password : "root",
    host : "localhost",
    port : 3306,
    database : "ecommerce",
    entities : [User , Category , Commande , Product],
    synchronize : true
  })],
})
export class AppModule {}
