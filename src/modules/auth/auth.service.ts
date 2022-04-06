import { Injectable } from '@nestjs/common';
import { AccessService } from 'src/modules/access/access.service';
import { AccessEntity } from 'src/database/entities';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

console.log('initialize');
@Injectable()
export class AuthService {
  constructor(
    private accessService: AccessService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const access = await this.accessService.findAccessByEmail(email);
    if (!access) return null;

    const isValidPassword = await bcrypt.compare(password, access.password);

    if (access && isValidPassword) {
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
