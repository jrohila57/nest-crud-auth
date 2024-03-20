import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create.dto';
import { UpdateUsersDto } from './dto/update.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll() {
    try {
      const users = await this.usersService.findAll();
      return { success: true, data: users };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      const user = await this.usersService.findOneById(id);
      if (!user) throw new Error('User not found');
      return { success: true, data: user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Post()
  async create(@Body(new ValidationPipe()) createUsersDto: CreateUsersDto) {
    try {
      const user = await this.usersService.create(createUsersDto);
      return { success: true, data: user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) updateUserDto: UpdateUsersDto,
  ) {
    try {
      const user = await this.usersService.updateOneById(id, updateUserDto);
      return { success: true, data: user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      const user = await this.usersService.deleteOneById(id);
      return { success: true, data: user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
