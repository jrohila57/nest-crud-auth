export class UpdateUsersDto {
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly phone?: number;
  readonly name?: string;
  readonly role?: 'user' | 'admin';
  readonly gender?: 'male' | 'female' | 'other';
  readonly dob?: Date;
}
