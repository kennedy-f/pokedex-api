import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PokemonsService } from 'src/modules/pokemons/pokemons.service';
import { PokemonEntity } from 'src/database/entities';

@Controller('pokemon')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Get()
  async findAll(): Promise<PokemonEntity[]> {
    return this.pokemonsService.getAllPokemons();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<PokemonEntity> {
    return this.pokemonsService.getPokemon(id);
  }

  @Post()
  create(@Body() createPokemonDto: PokemonEntity): Promise<PokemonEntity> {
    return this.pokemonsService.createPokemon(createPokemonDto);
  }
}
