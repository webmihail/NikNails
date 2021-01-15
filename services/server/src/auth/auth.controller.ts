import { UseGuards, Controller, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/common/decorators';
import { UserDTO } from 'src/users/dtos';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(
    @User() user: UserDTO,
  ): Promise<{
    user: UserDTO;
    accessToken: string;
  }> {
    const data = await this.authService.login(user);
    return data;
  }

  // @UseGuards(AuthGuard('jwt'))
}
