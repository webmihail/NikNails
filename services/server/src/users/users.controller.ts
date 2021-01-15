import { UsePipes } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import {
  Body,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Controller,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { EditUserDTO, UserDTO } from './dtos';
import { UsersService } from './users.service';

@Controller('users')
@UsePipes(new ValidationPipe())
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<UserDTO[]> {
    return await this.userService.getAllUsers();
  }

  @Get(':id')
  async getUser(@Param('id') id: number): Promise<UserDTO> {
    return await this.userService.getUser(id);
  }

  @Post()
  async createUser(@Body() data: UserDTO): Promise<UserDTO> {
    return await this.userService.createUser(data);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() data: EditUserDTO,
  ): Promise<UserDTO> {
    const user = await this.userService.updateUser(id, data);

    return user;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<DeleteResult> {
    return this.userService.deleteUser(id);
  }
}
