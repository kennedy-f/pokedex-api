import { Injectable } from '@nestjs/common';
import { RepoService } from 'src/database/repository';
import { PokemonEntity } from 'src/database/entities';

@Injectable()
export class ImportService {
  constructor(private readonly repoService: RepoService) {}

  getPokemons(): string {
    return 'Hello World!';
  }

  public async createPokemon(data: PokemonEntity): Promise<PokemonEntity> {
    const pokemon = this.repoService.pokemonsRepo.create(data);
    return await this.repoService.pokemonsRepo.save(pokemon);
  }
}
