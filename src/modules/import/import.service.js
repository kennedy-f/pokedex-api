"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ImportService = void 0;
var common_1 = require("@nestjs/common");
var pokemons_json_1 = require("../../utils/constants/pokemons.json");
var ImportService = /** @class */ (function () {
    function ImportService(repoService) {
        this.repoService = repoService;
    }
    ImportService.prototype.createTypes = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var typeEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repoService.typesRepo.findOne({
                            where: { name: type }
                        })];
                    case 1:
                        typeEntity = _a.sent();
                        if (typeEntity)
                            return [2 /*return*/, typeEntity];
                        return [4 /*yield*/, this.repoService.typesRepo.save({ name: type })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ImportService.prototype.createWeather = function (weather) {
        return __awaiter(this, void 0, void 0, function () {
            var weatherData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repoService.weatherRepo.findOne({
                            where: { name: weather }
                        })];
                    case 1:
                        weatherData = _a.sent();
                        if (weatherData)
                            return [2 /*return*/, weatherData];
                        return [4 /*yield*/, this.repoService.weatherRepo.save({ name: weather })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ImportService.prototype.importPokemons = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, pokemon, pokemonEntity, typesEntities, _b, _c, _d, _e, weatherEntities, _f, _g, _h, _j;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        _i = 0, _a = pokemons_json_1["default"];
                        _k.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 9];
                        pokemon = _a[_i];
                        return [4 /*yield*/, this.repoService.pokemonRepo.findOne({
                                where: { name: pokemon.Name }
                            })];
                    case 2:
                        pokemonEntity = _k.sent();
                        if (pokemonEntity)
                            return [2 /*return*/];
                        typesEntities = [];
                        _c = (_b = typesEntities).push;
                        return [4 /*yield*/, this.createTypes(pokemon.Type_1)];
                    case 3:
                        _c.apply(_b, [_k.sent()]);
                        _e = (_d = typesEntities).push;
                        return [4 /*yield*/, this.createTypes(pokemon.Type_2)];
                    case 4:
                        _e.apply(_d, [_k.sent()]);
                        weatherEntities = [];
                        _g = (_f = weatherEntities).push;
                        return [4 /*yield*/, this.createWeather(pokemon.weather_1)];
                    case 5:
                        _g.apply(_f, [_k.sent()]);
                        _j = (_h = weatherEntities).push;
                        return [4 /*yield*/, this.createWeather(pokemon.weather_2)];
                    case 6:
                        _j.apply(_h, [_k.sent()]);
                        return [4 /*yield*/, this.repoService.pokemonRepo.save({
                                name: pokemon.Name,
                                def: Number(pokemon.DEF),
                                stat_total: Number(pokemon.stat_total),
                                types: typesEntities,
                                weathers: weatherEntities
                            })];
                    case 7:
                        _k.sent();
                        _k.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 1];
                    case 9: return [4 /*yield*/, this.repoService.pokemonRepo.find()];
                    case 10: return [2 /*return*/, _k.sent()];
                }
            });
        });
    };
    ImportService = __decorate([
        (0, common_1.Injectable)()
    ], ImportService);
    return ImportService;
}());
exports.ImportService = ImportService;
