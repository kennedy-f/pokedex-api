import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import TypeOrmConfig from './config/typeorm/typeorm.config';
import { ImportModule } from 'src/modules/import/import.module';
import RepoModule from 'src/database/repository/repositories.module';
import { PokemonsModule } from 'src/modules/pokemons/pokemons.module';
import { TypesModule } from 'src/modules/types/types.module';
import { AccessModule } from 'src/modules/access/access.module';
import { AuthModule } from 'src/modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    RepoModule,
    AuthModule,
    ImportModule,
    PokemonsModule,
    TypesModule,
    AccessModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
