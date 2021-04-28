import { UseGuards, Controller, Post, Get, Request } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RequestOptions } from 'https';
import { User } from 'src/common/decorators';
import { UserDTO } from 'src/users/dtos';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { TokenDTO } from './dtos';
import { JwtAuthGuard, LocalAuthGuard } from './guards';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @User() user: UserDTO,
  ): Promise<{
    user: UserDTO;
    accessToken: TokenDTO;
  }> {
    const data = await this.authService.login(user);
    return data;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Request() req: RequestOptions): Promise<UserDTO> {
    const token = String(req.headers.authorization).split(' ')[1];
    const userId = this.jwtService.decode(token)['sub'];
    const user = await this.usersService.getUser(userId);
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('refresh')
  async refreshToken(
    @Request() req: RequestOptions,
  ): Promise<{
    user: UserDTO;
    accessToken: TokenDTO;
  }> {
    const token = String(req.headers.authorization).split(' ')[1];
    const userId = this.jwtService.decode(token)['sub'];
    const user = await this.usersService.getUser(userId);
    const data = await this.authService.login(user);
    return data;
  }
}
