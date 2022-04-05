# Poke API

## How to use
Need docker-compose to run this project.

```zsh
  docker-compose up poke-api
```

## Populating the database 

Access the route `/import` to populate the database.

```zsh
  curl -X POST http://localhost:3000/import
```

## What is working now? 
[x] Create pokemon 

[x] Read pokemon

[x] Update pokemon

[] Delete
