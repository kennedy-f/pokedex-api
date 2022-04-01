import { Injectable, Logger } from '@nestjs/common';
import { RepoService } from 'src/database/repository';
import {
  PokemonEntity,
  TypesEntity,
  WeatherEntity,
} from 'src/database/entities';
import { PokemonConstants } from 'src/utils/constants/pokemons.contants';
import * as PokemonsJsonData from '../../utils/constants/pokemons.json';

@Injectable()
export class ImportService {
  constructor(private readonly repoService: RepoService) {}

  private async createTypes(type: string) {
    const typeEntity = await this.repoService.typesRepo.findOne({
      where: { name: type },
    });
    if (typeEntity) return typeEntity;

    return await this.repoService.typesRepo.save({ name: type });
  }

  private async createWeather(weather: string) {
    const weatherData = await this.repoService.weatherRepo.findOne({
      where: { name: weather },
    });
    if (weatherData) return weatherData;

    return await this.repoService.weatherRepo.save({ name: weather });
  }

  public async importPokemons(): Promise<PokemonEntity[]> {
    Logger.log('Importing pokemons...');
    for (const pokemon of PokemonsJsonData as PokemonConstants[]) {
      const pokemonEntity = await this.repoService.pokemonRepository.findOne({
        where: { name: pokemon.Name },
      });
      if (pokemonEntity) continue;
      if (!pokemon.Name) continue;

      const typesEntities: TypesEntity[] = [];
      if (pokemon.Type_1)
        typesEntities.push(await this.createTypes(pokemon.Type_1));
      if (pokemon.Type_2)
        typesEntities.push(await this.createTypes(pokemon.Type_2));

      const weatherEntities: WeatherEntity[] = [];
      if (pokemon.weather_1)
        weatherEntities.push(await this.createWeather(pokemon.weather_1));
      if (pokemon.weather_2)
        weatherEntities.push(await this.createWeather(pokemon.weather_2));

      try {
        await this.repoService.pokemonRepository.save({
          name: pokemon.Name,
          def: Number(pokemon.DEF),
          atk: Number(pokemon.ATK),
          sta: Number(pokemon.STA),
          pokedexNumber: Number(pokemon.pokedex_number),
          stat_total: Number(pokemon.stat_total),
          type: typesEntities,
          weather: weatherEntities,
        });
      } catch (err) {
        console.error(err);
      }
    }
    Logger.log('Pokemons imported!');
    return await this.repoService.pokemonRepository.find();
  }
}
