import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PokemonEntity, TypesEntity } from 'src/database/entities';
import { TypesService } from 'src/modules/types/types.service';

@Controller('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Get()
  async findAll(): Promise<TypesEntity[]> {
    return this.typesService.getAllTypes();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<TypesEntity> {
    return this.typesService.getType(id);
  }

  @Post()
  create(@Body() createPokemonDto: TypesEntity): Promise<TypesEntity> {
    return this.typesService.createType(createPokemonDto);
  }
}
