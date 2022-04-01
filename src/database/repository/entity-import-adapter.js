"use strict";
exports.__esModule = true;
exports.EntityImportAdapter = void 0;
// Get an object of entities and return an array of entities
var EntityImportAdapter = function (entities) {
    return Object.keys(entities).map(function (key) {
        return entities[key];
    });
};
exports.EntityImportAdapter = EntityImportAdapter;
