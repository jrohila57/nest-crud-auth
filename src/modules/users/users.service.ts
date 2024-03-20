import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/core/constants';
import { Users } from './model/users.model';
import { CreateUsersDto } from './dto/create.dto';
import { UpdateUsersDto } from './dto/update.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly usersProviders: typeof Users,
  ) {}

  async create(user: CreateUsersDto): Promise<Users> {
    return await this.usersProviders.create(user);
  }
  async findAll(): Promise<Users[]> {
    return await this.usersProviders.findAll();
  }
  async findOneByEmail(email: string): Promise<Users> {
    return await this.usersProviders.findOne({ where: { email } });
  }
  async findOneById(id: number): Promise<Users> {
    return await this.usersProviders.findOne({ where: { id } });
  }
  async UpdateOneById(id: number, user: UpdateUsersDto): Promise<Users> {
    return await this.usersProviders.update({ ...user }, { where: { id } })[0];
  }
  async DeleteOneById(id: number): Promise<Users> {
    return await this.usersProviders.destroy({ where: { id } })[0];
  }
}
