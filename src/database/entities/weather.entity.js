"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WeatherEntity = void 0;
var typeorm_1 = require("typeorm");
var pokemon_entity_1 = require("./pokemon.entity");
var WeatherEntity = /** @class */ (function () {
    function WeatherEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], WeatherEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], WeatherEntity.prototype, "name");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ name: 'created_at' })
    ], WeatherEntity.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' })
    ], WeatherEntity.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return pokemon_entity_1.PokemonEntity; }, function (_a) {
            var weather = _a.weather;
            return weather;
        })
    ], WeatherEntity.prototype, "pokemons");
    WeatherEntity = __decorate([
        (0, typeorm_1.Entity)({ name: 'weather' })
    ], WeatherEntity);
    return WeatherEntity;
}());
exports.WeatherEntity = WeatherEntity;
