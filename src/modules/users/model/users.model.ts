import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { ADMIN, FEMALE, MALE, OTHER, USER } from 'src/core/constants';

@Table
export class Users extends Model<Users> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;
  @Column({
    type: DataType.INTEGER,
    unique: true,
  })
  phone: number;

  @Column({
    type: DataType.ENUM,
    values: [ADMIN, USER],
    defaultValue: USER,
  })
  role: string;

  @Column({
    type: DataType.ENUM,
    values: [MALE, FEMALE, OTHER],
    allowNull: true,
  })
  gender: string;

  @Column({
    type: DataType.DATE,
  })
  dob: Date;
}
