"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TypesEntity = void 0;
var typeorm_1 = require("typeorm");
var pokemon_entity_1 = require("./pokemon.entity");
var TypesEntity = /** @class */ (function () {
    function TypesEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], TypesEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], TypesEntity.prototype, "name");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ name: 'created_at' })
    ], TypesEntity.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' })
    ], TypesEntity.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return pokemon_entity_1.PokemonEntity; }, function (_a) {
            var type = _a.type;
            return type;
        })
    ], TypesEntity.prototype, "pokemons");
    TypesEntity = __decorate([
        (0, typeorm_1.Entity)({ name: 'types' })
    ], TypesEntity);
    return TypesEntity;
}());
exports.TypesEntity = TypesEntity;
