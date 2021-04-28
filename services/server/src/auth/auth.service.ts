import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/users/dtos';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { TokenDTO } from './dtos';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.getUserByEmail(email);

    if (user && (await compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...rest } = user;
      return rest;
    }

    return null;
  }

  async login(
    user: UserDTO,
  ): Promise<{
    user: UserDTO;
    accessToken: TokenDTO;
  }> {
    const { id } = user;
    const payload = { sub: id };
    const token = this.jwtService.sign(payload);

    return {
      user,
      accessToken: {
        token,
        expirationDate: this.jwtService.decode(token)['exp'],
      },
    };
  }
}
