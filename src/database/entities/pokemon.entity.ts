import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';

import { TypesEntity } from './types.entity';
import { WeatherEntity } from 'src/database/entities/weather.entity';

@Entity({ name: 'pokemons' })
export class PokemonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'pokedex_number', type: 'int' })
  pokedexNumber: number;

  @Column()
  atk: number;

  @Column()
  def: number;

  @Column({ nullable: true })
  sta: number;

  @Column({ nullable: true })
  generation: number;

  @Column({ nullable: true })
  evolution: number;

  @Column({ nullable: true })
  stat_total: number;

  @Column({ default: false })
  legendary: boolean;

  @Column({ nullable: true })
  cp1: number;

  @Column({ nullable: true })
  cp2: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToMany(() => TypesEntity, { eager: true })
  @JoinTable({
    name: 'pokemon_types',
    joinColumn: { name: 'pokemon_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'type_id', referencedColumnName: 'id' },
  })
  type: TypesEntity[];

  @ManyToMany(() => WeatherEntity, { eager: true })
  @JoinTable({
    name: 'pokemon_weathers',
    joinColumn: { name: 'pokemon_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'weather_id', referencedColumnName: 'id' },
  })
  weather: WeatherEntity[];
}
