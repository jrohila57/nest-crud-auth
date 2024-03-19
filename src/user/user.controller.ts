import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { Response } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  // Get all Users
  @Get()
  async findAll(@Res() res: Response): Promise<any[]> {
    try {
      const users = await this.userService.findAll();
      res.status(HttpStatus.OK);
      return users;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'This is a custom message',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  // Get User By Id
  @Get(':id')
  async findById(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<string> {
    try {
      const user = await this.userService.findById(id);
      res.status(HttpStatus.OK);
      return user;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'This is a custom message',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  // Create User
  @Post()
  @HttpCode(204)
  async create(
    @Res() res: Response,
    @Body() userDto: UserDto,
  ): Promise<UserDto> {
    try {
      const user = await this.userService.create(userDto);
      res.status(HttpStatus.OK);
      return user;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'This is a custom message',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  // Update User by Id
  @Put()
  async updateById(
    @Res() res: Response,
    @Body() userDto: UserDto,
    @Param('id') id: string,
  ): Promise<{ user: UserDto; id: string }> {
    try {
      const user = await this.userService.updateById(userDto, id);
      res.send(HttpStatus.OK);
      return user;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'this is the error msg',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }

  //Delete User by Id
  @Delete()
  async deleteById(
    @Res() res: Response,
    @Param('id') id: string,
  ): Promise<string> {
    try {
      const user = await this.userService.deleteById(id);
      res.status(HttpStatus.OK);
      return user;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'this is the error msg',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }
}
