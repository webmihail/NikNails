import { UseGuards, Controller, Post, Get } from '@nestjs/common';
import { User } from 'src/common/decorators';
import { UserDTO } from 'src/users/dtos';
import { AuthService } from './auth.service';
import { JwtAuthGuard, LocalAuthGuard } from './guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @User() user: UserDTO,
  ): Promise<{
    user: UserDTO;
    accessToken: string;
    expirationDate: number;
  }> {
    const data = await this.authService.login(user);
    return data;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  profile(@User() user: UserDTO): UserDTO {
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('refresh')
  refreshToken(
    @User() user: UserDTO,
  ): Promise<{
    user: UserDTO;
    accessToken: string;
  }> {
    const data = this.authService.login(user);
    return data;
  }
}
