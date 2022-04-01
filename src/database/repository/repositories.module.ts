import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepoService } from './repositories.service';
import * as Entities from '../entities';
import { EntityImportAdapter } from 'src/database/repository/entity-import-adapter';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(EntityImportAdapter(Entities))],
  providers: [RepoService],
  exports: [RepoService],
})
class RepoModule {}

export default RepoModule;
