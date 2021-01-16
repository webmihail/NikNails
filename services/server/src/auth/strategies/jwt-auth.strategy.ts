import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import settings from 'settings';
import { UserDTO } from 'src/users/dtos';

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: settings.jwtProps.secret,
    });
  }

  async validate(payload: { sub: number }): Promise<UserDTO> {
    const { sub: id } = payload;

    return await this.usersService.getUser(id);
  }
}
