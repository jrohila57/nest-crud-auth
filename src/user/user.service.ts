import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor() {}

  async findAll() {
    return [];
  }
  async findById(id: string) {
    return id;
  }
  async create(user: UserDto) {
    return user;
  }
  async updateById(user: UserDto, id: string) {
    return { user, id };
  }
  async deleteById(id: string) {
    return id;
  }
}

@Injectable()
export class HttpService<T> {
  @Inject('HTTP_OPTIONS')
  private readonly httpClient: T;
}
