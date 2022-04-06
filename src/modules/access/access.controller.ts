import { Controller, Get, UseGuards } from '@nestjs/common';
import { AccessEntity } from 'src/database/entities';
import { AccessService } from 'src/modules/access/access.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('access')
export class AccessController {
  constructor(private readonly accessService: AccessService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAccess(): Promise<AccessEntity[]> {
    return this.accessService.getAccess();
  }
}
