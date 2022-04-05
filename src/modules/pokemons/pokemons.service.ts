import { Injectable } from '@nestjs/common';
import { RepoService } from 'src/database/repository';
import { PokemonEntity } from 'src/database/entities';

@Injectable()
export class PokemonsService {
  constructor(private readonly repoService: RepoService) {}
  public async getAllPokemons(): Promise<PokemonEntity[]> {
    return await this.repoService.pokemonRepository.find();
  }

  public async getPokemon(id: number): Promise<PokemonEntity> {
    return await this.repoService.pokemonRepository.findOne(id);
  }

  public async createPokemon(data: PokemonEntity): Promise<PokemonEntity> {
    const pokemon = this.repoService.pokemonRepository.create(data);
    return await this.repoService.pokemonRepository.save(pokemon);
  }

  public async updatePokemon(data: PokemonEntity): Promise<PokemonEntity> {
    const { type, weather, ...props } = data;
    await this.repoService.pokemonRepository.update(data.id, {
      ...props,
    });
    return await this.repoService.pokemonRepository.findOne(data.id);
  }
}
