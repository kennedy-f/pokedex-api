import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { PokemonEntity, WeatherEntity, TypesEntity } from '../entities';

@Injectable()
export class RepoService {
  public constructor(
    @InjectRepository(PokemonEntity)
    public readonly pokemonRepo: Repository<PokemonEntity>,
    @InjectRepository(WeatherEntity)
    public readonly weatherRepo: Repository<WeatherEntity>,
    @InjectRepository(TypesEntity)
    public readonly typesRepo: Repository<TypesEntity>,
  ) {}
}
