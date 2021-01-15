import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { EditUserDTO, UserDTO } from './dtos';
import { User } from './entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<UserDTO[]> {
    return await this.usersRepository.find();
  }

  async getUser(id: number): Promise<UserDTO> {
    const user = await this.usersRepository.findOne(id);
    if (!user) throw new NotFoundException('user does not exists');

    return user;
  }

  async getUserByEmail(email: string): Promise<UserDTO> {
    return await this.usersRepository
      .createQueryBuilder('user')
      .where({ email })
      .addSelect('user.password')
      .getOne();
  }

  async createUser(data: UserDTO): Promise<UserDTO> {
    const userExist = await this.usersRepository.findOne({ email: data.email });
    if (userExist)
      throw new NotFoundException('User already registered with email');

    const newUser = await this.usersRepository.create(data);
    const user = await this.usersRepository.save(newUser);

    delete user.password;
    return user;
  }

  async updateUser(id: number, data: EditUserDTO): Promise<UserDTO> {
    const user = await this.getUser(id);
    const editUser = Object.assign(user, data);
    const saveUser = await this.usersRepository.save(editUser);

    delete saveUser.password;
    return saveUser;
  }

  async deleteUser(id: number): Promise<DeleteResult> {
    const user = await this.getUser(id);
    return await this.usersRepository.delete(user);
  }
}
