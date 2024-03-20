import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Bind,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create.dto';
import { UpdateUsersDto } from './dto/update.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @Bind(Body())
  async create(createUsersDto: CreateUsersDto) {
    const user = await this.usersService.create(createUsersDto);
    return user;
  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return users;
  }

  @Get(':id')
  @Bind(Param('id'))
  async findOne(id: number) {
    const user = await this.usersService.findOneById(id);
    return user;
  }

  @Put(':id')
  @Bind(Param('id'), Body())
  async update(id: number, updateUserDto: UpdateUsersDto) {
    const user = await this.usersService.UpdateOneById(id, updateUserDto);
    return user;
  }

  @Delete(':id')
  @Bind(Param('id'))
  async remove(id: number) {
    const user = await this.usersService.DeleteOneById(id);
    return user;
  }
}
