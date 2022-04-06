import { Module } from '@nestjs/common';
import { AccessService } from 'src/modules/access/access.service';
import { AccessController } from 'src/modules/access/access.controller';

@Module({
  imports: [AccessModule],
  providers: [AccessService],
  controllers: [AccessController],
  exports: [AccessService],
})
export class AccessModule {}
