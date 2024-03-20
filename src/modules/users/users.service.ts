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
    try {
      return await this.usersProviders.create(user);
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  async findAll(): Promise<Users[]> {
    try {
      return await this.usersProviders.findAll();
    } catch (error) {
      throw new Error(`Error finding all users: ${error.message}`);
    }
  }

  async findOneByEmail(email: string): Promise<Users> {
    try {
      return await this.usersProviders.findOne({ where: { email } });
    } catch (error) {
      throw new Error(`Error finding user by email: ${error.message}`);
    }
  }

  async findOneById(id: number): Promise<Users> {
    try {
      return await this.usersProviders.findOne({ where: { id } });
    } catch (error) {
      throw new Error(`Error finding user by ID: ${error.message}`);
    }
  }

  async updateOneById(id: number, user: UpdateUsersDto): Promise<Users> {
    try {
      const updatedUser = await this.usersProviders.update(user, {
        where: { id },
      })[0];
      return updatedUser;
    } catch (error) {
      throw new Error(`Error updating user by ID: ${error.message}`);
    }
  }

  async deleteOneById(id: number): Promise<Users> {
    try {
      const deletedUser = await this.usersProviders.destroy({
        where: { id },
      })[0];
      return deletedUser;
    } catch (error) {
      throw new Error(`Error deleting user by ID: ${error.message}`);
    }
  }
}
