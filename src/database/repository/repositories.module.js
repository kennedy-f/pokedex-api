"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var repositories_service_1 = require("./repositories.service");
var Entities = require("../entities");
var entity_import_adapter_1 = require("./entity-import-adapter");
var RepoModule = /** @class */ (function () {
    function RepoModule() {
    }
    RepoModule = __decorate([
        (0, common_1.Global)(),
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature((0, entity_import_adapter_1.EntityImportAdapter)(Entities))],
            providers: [repositories_service_1.RepoService],
            exports: [repositories_service_1.RepoService]
        })
    ], RepoModule);
    return RepoModule;
}());
exports["default"] = RepoModule;
