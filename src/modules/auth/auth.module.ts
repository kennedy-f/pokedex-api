import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/guards/auth/local/loca.strategy';
import { AccessModule } from 'src/modules/access/access.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/modules/auth/auth.contants';

@Module({
  imports: [
    AccessModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '30d' },
    }),
  ],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
