import { Body, Controller, Post } from '@nestjs/common';
import { PokemonsService } from 'src/modules/pokemons/pokemons.service';
import { PokemonEntity } from 'src/database/entities';

@Controller()
export class ImportController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Post()
  create(@Body() createPokemonDto: PokemonEntity): Promise<PokemonEntity> {
    return this.pokemonsService.createPokemon(createPokemonDto);
  }
}
