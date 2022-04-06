import { Injectable, Logger } from '@nestjs/common';
import { RepoService } from 'src/database/repository';
import {
  AccessEntity,
  PokemonEntity,
  TypesEntity,
  WeatherEntity,
} from 'src/database/entities';
import { PokemonConstants } from 'src/utils/constants/pokemons.contants';
import * as PokemonsJsonData from '../../utils/constants/pokemons.json';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ImportService {
  constructor(private readonly repoService: RepoService) {}

  private async createTypes(type: string) {
    if (!type) return;

    const typeEntity = await this.repoService.typesRepo.findOne({
      where: { name: type },
    });
    if (typeEntity) return typeEntity;

    return await this.repoService.typesRepo.save({ name: type });
  }

  private async createWeather(weather: string) {
    if (!weather) return;
    const weatherData = await this.repoService.weatherRepo.findOne({
      where: { name: weather },
    });
    if (weatherData) return weatherData;

    return await this.repoService.weatherRepo.save({ name: weather });
  }

  private async importPokemons(): Promise<PokemonEntity[]> {
    Logger.log('Importing pokemons...');
    for (const pokemon of PokemonsJsonData as PokemonConstants[]) {
      if (!pokemon.Name) return;
      const pokemonEntity = await this.repoService.pokemonRepository.findOne({
        where: { name: pokemon.Name },
      });
      if (pokemonEntity) return;

      Logger.log('chegou aqui sem nome');

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

  private async generateDefaultLogin(): Promise<AccessEntity> {
    Logger.log('Generating default login...');
    const accessEntity = this.repoService.accessRepository.create();
    // other way to create data with typeorm
    accessEntity.email = 'admin@admin.com';
    accessEntity.password = await bcrypt.hash('admin', 10); //never save password in plain text always hash it

    return await this.repoService.accessRepository.save(accessEntity);
  }

  public async initializeImport() {
    const defaultAccess = await this.generateDefaultLogin();
    const pokemons = await this.importPokemons();
    return { pokemons, defaultAccess };
  }
}
