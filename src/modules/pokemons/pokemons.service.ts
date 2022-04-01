import { Injectable } from '@nestjs/common';
import { RepoService } from 'src/database/repository';
import { PokemonEntity } from 'src/database/entities';

@Injectable()
export class PokemonsService {
  constructor(private readonly repoService: RepoService) {}

  public async createPokemon(data: PokemonEntity): Promise<PokemonEntity> {
    const pokemon = this.repoService.pokemonRepo.create(data);
    return await this.repoService.pokemonRepo.save(pokemon);
  }
}
