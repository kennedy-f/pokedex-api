import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/auth/strategies/local.strategy';
import { AccessModule } from 'src/modules/access/access.module';
import { AuthController } from 'src/modules/auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/modules/auth/auth.contants';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';

@Module({
  imports: [
    AccessModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
