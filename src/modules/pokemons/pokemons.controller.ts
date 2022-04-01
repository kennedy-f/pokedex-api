import { Body, Controller, Get, Post } from '@nestjs/common';
import { PokemonsService } from 'src/modules/pokemons/pokemons.service';
import { PokemonEntity } from 'src/database/entities';

@Controller('pokemon')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Get()
  async findAll(): Promise<PokemonEntity[]> {
    return this.pokemonsService.getAllPokemons();
  }

  @Post()
  create(@Body() createPokemonDto: PokemonEntity): Promise<PokemonEntity> {
    return this.pokemonsService.createPokemon(createPokemonDto);
  }
}
