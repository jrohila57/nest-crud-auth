import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

const User = undefined;
@Injectable()
export class UserService {
  constructor() {}

  async findAll() {
    return await User.findAll();
  }
  async findById(id: number) {
    return await User.findOne({ where: { id } });
  }
  async create(user: UserDto) {
    return await User.create({ ...user });
  }
  async updateById(user: UserDto, id: number) {
    return await User.update({ ...user }, { where: { id } })[0];
  }
  async deleteById(id: number) {
    return await User.destroy({ where: { id } })[0];
  }
}

@Injectable()
export class HttpService<T> {
  @Inject('HTTP_OPTIONS')
  private readonly httpClient: T;
}
