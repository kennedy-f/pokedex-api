import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { PokemonEntity, TypesEntity } from 'src/database/entities';
import { TypesService } from 'src/modules/types/types.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

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

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPokemonDto: TypesEntity): Promise<TypesEntity> {
    return this.typesService.createType(createPokemonDto);
  }
}
