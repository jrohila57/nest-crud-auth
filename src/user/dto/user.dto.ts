import {
  IsEmail,
  IsEnum,
  IsDateString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export enum Gender {
  male = 'male',
  female = 'female',
  other = 'other',
}
export enum Role {
  admin = 'admin',
  user = 'user',
}

export class UserDto {
  @IsNotEmpty()
  readonly firstName: string;

  @IsNotEmpty()
  readonly lastName: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly phone: string;

  @IsEnum(Gender)
  readonly gender: Gender;

  @IsEnum(Role)
  readonly role: Role;

  @IsDateString()
  readonly dob: Date;

  @IsOptional()
  readonly id?: number;
}
