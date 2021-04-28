import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { JwtAuthStrategy, LocalAuthStrategy } from './strategies';
import { JwtModule } from '@nestjs/jwt';
import settings from 'settings';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: settings.jwtProps.secret,
      signOptions: { expiresIn: '60m' },
    }),
    UsersModule,
  ],
  providers: [AuthService, LocalAuthStrategy, JwtAuthStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
