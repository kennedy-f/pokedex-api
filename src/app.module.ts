import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import TypeOrmConfig from './config/typeorm/typeorm.config';
import { ImportController } from 'src/modules/import/import.controller';
import { ImportModule } from 'src/modules/import/import.module';
import RepoModule from 'src/database/repository/repositories.module';
import { PokemonsModule } from 'src/modules/pokemons/pokemons.module';
import { PokemonsController } from 'src/modules/pokemons/pokemons.controller';
import { ImportService } from 'src/modules/import/import.service';
import { PokemonsService } from 'src/modules/pokemons/pokemons.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    RepoModule,
    ImportModule,
    PokemonsModule,
  ],
  controllers: [AppController, ImportController, PokemonsController],
  providers: [AppService, ImportService, PokemonsService],
})
export class AppModule {}
