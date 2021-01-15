import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/users/dtos';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<UserDTO | null> {
    const user = await this.usersService.getUserByEmail(email);

    if (user && (await compare(password, user.password))) {
      return user;
    }

    return null;
  }

  async login(
    user: UserDTO,
  ): Promise<{
    user: UserDTO;
    accessToken: string;
  }> {
    const { id } = user;
    const payload = { sub: id };

    return {
      user,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
