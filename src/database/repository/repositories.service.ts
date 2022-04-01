import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { PokemonEntity, WeatherEntity, TypesEntity } from '../entities';

@Injectable()
export class RepoService {
  public constructor(
    @InjectRepository(PokemonEntity)
    public readonly pokemonsRepo: Repository<PokemonEntity>,
  ) {}
}
