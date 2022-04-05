import { Module } from '@nestjs/common';
import { TypesController } from 'src/modules/types/types.controller';
import { TypesService } from 'src/modules/types/types.service';

@Module({
  controllers: [TypesController],
  providers: [TypesService],
})
export class TypesModule {}
