import { USER_REPOSITORY } from 'src/core/constants';
import { Users } from './model/users.model';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: Users,
  },
];
