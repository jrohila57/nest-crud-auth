import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { Response } from 'express';
import { UserService } from './user.service';
import { User, UserInstance, UserModelStatic } from './interface/user.interface';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  // Get all Users
  @Get()
  async findAll(@Res() res: Response): Promise<UserModelStatic[]> {
    const users = await this.userService.findAll();
    res.send(users);
    return users;
  }
  // Get User By Id
  @Get(':id')
  async findById(
    @Res() res: Response,
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): Promise<UserInstance> {
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
  async create(@Res() res: Response, @Body() userDto: UserDto): Promise<User> {
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
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): Promise<User> {
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
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): Promise<User> {
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
