import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AccessEntity } from 'src/database/entities';
import { AccessService } from 'src/modules/access/access.service';
import { LocalAuthGuard } from 'src/guards/auth/local/local-auth.guard';
import { AuthService } from 'src/modules/auth/auth.service';

@Controller('access')
export class AccessController {
  constructor(
    private readonly accessService: AccessService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getAccess(): Promise<AccessEntity[]> {
    return this.accessService.getAccess();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
