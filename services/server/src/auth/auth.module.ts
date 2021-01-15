import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy, LocalStrategy } from './strategies';
import { JwtModule } from '@nestjs/jwt';
import settings from 'settings';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: settings.jwtProps.secret,
      signOptions: { expiresIn: '60s' }
    }),
    UsersModule
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
