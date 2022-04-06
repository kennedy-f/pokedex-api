import { Injectable } from '@nestjs/common';
import { AccessService } from 'src/modules/access/access.service';
import { AccessEntity } from 'src/database/entities';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private accessService: AccessService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const access = await this.accessService.findAccess(email);
    if (access && access.password === password) {
      const { password, ...result } = access;
      return result;
    }
    return null;
  }

  async login(user: AccessEntity) {
    const payload = { username: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
