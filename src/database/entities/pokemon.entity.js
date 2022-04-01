"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PokemonEntity = void 0;
var typeorm_1 = require("typeorm");
var types_entity_1 = require("./types.entity");
var weather_entity_1 = require("./weather.entity");
var PokemonEntity = /** @class */ (function () {
    function PokemonEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], PokemonEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], PokemonEntity.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)({ name: 'pokedex_number', type: 'int' })
    ], PokemonEntity.prototype, "pokedexNumber");
    __decorate([
        (0, typeorm_1.Column)()
    ], PokemonEntity.prototype, "atk");
    __decorate([
        (0, typeorm_1.Column)()
    ], PokemonEntity.prototype, "def");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PokemonEntity.prototype, "sta");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PokemonEntity.prototype, "generation");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PokemonEntity.prototype, "evolution");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PokemonEntity.prototype, "stat_total");
    __decorate([
        (0, typeorm_1.Column)({ "default": false })
    ], PokemonEntity.prototype, "legendary");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PokemonEntity.prototype, "cp1");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PokemonEntity.prototype, "cp2");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ name: 'created_at' })
    ], PokemonEntity.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' })
    ], PokemonEntity.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return types_entity_1.TypesEntity; }),
        (0, typeorm_1.JoinTable)({
            name: 'pokemon_types',
            joinColumn: { name: 'pokemon_id', referencedColumnName: 'id' },
            inverseJoinColumn: { name: 'type_id', referencedColumnName: 'id' }
        })
    ], PokemonEntity.prototype, "type");
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return weather_entity_1.WeatherEntity; }),
        (0, typeorm_1.JoinTable)({
            name: 'pokemon_weathers',
            joinColumn: { name: 'pokemon_id', referencedColumnName: 'id' },
            inverseJoinColumn: { name: 'weather_id', referencedColumnName: 'id' }
        })
    ], PokemonEntity.prototype, "weather");
    PokemonEntity = __decorate([
        (0, typeorm_1.Entity)({ name: 'pokemons' })
    ], PokemonEntity);
    return PokemonEntity;
}());
exports.PokemonEntity = PokemonEntity;
