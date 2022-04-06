import { Controller, Get } from '@nestjs/common';
import { AccessEntity, PokemonEntity } from 'src/database/entities';
import { ImportService } from 'src/modules/import/import.service';

@Controller('import')
export class ImportController {
  constructor(private readonly importService: ImportService) {}

  @Get()
  create(): Promise<{
    defaultAccess: AccessEntity;
    pokemons: PokemonEntity[];
  }> {
    return this.importService.initializeImport();
  }
}
