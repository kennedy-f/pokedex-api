import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import {
  PokemonEntity,
  WeatherEntity,
  TypesEntity,
  AccessEntity,
} from '../entities';

@Injectable()
export class RepoService {
  public constructor(
    @InjectRepository(PokemonEntity)
    public readonly pokemonRepository: Repository<PokemonEntity>,
    @InjectRepository(WeatherEntity)
    public readonly weatherRepo: Repository<WeatherEntity>,
    @InjectRepository(TypesEntity)
    public readonly typesRepo: Repository<TypesEntity>,
    @InjectRepository(TypesEntity)
    public readonly accessRepository: Repository<AccessEntity>,
  ) {}
}
