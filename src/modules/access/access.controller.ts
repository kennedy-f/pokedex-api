import { Controller, Get } from '@nestjs/common';
import { AccessEntity } from 'src/database/entities';
import { AccessService } from 'src/modules/access/access.service';

@Controller('access')
export class AccessController {
  constructor(private readonly accessService: AccessService) {}

  @Get()
  getAccess(): Promise<AccessEntity[]> {
    return this.accessService.getAccess();
  }
}
