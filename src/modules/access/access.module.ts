import { Module } from '@nestjs/common';
import { AccessService } from 'src/modules/access/access.service';
import { AccessController } from 'src/modules/access/access.controller';

@Module({
  imports: [],
  providers: [AccessService, AccessController],
})
export class AccessModule {}
