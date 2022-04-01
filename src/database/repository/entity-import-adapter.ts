// Get an object of entities and return an array of entities
export const EntityImportAdapter = (entities): any[] => {
  return Object.keys(entities).map((key) => {
    return entities[key];
  });
};
