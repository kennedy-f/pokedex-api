import { Controller, Get } from '@nestjs/common';
import { PokemonEntity } from 'src/database/entities';
import { ImportService } from 'src/modules/import/import.service';

@Controller('import')
export class ImportController {
  constructor(private readonly importService: ImportService) {}

  @Get()
  create(): Promise<PokemonEntity[]> {
    return this.importService.importPokemons();
  }
}
