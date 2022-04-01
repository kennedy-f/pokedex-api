import { Module } from '@nestjs/common';
import { PokemonsController } from 'src/modules/pokemons/pokemons.controller';
import { PokemonsService } from 'src/modules/pokemons/pokemons.service';

@Module({
  controllers: [PokemonsController],
  providers: [PokemonsService],
})
export class AppModule {}
