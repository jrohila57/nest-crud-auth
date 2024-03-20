import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @AllowNull(false)
  @Column
  firstName!: string;

  @AllowNull(false)
  @Column
  lastName!: string;

  @Column({ defaultValue: true, allowNull: false })
  isActive!: boolean;

  @Unique
  @AllowNull(false)
  @Column
  email!: string;

  @Unique
  @Column(DataType.BIGINT)
  phone!: number;

  @Column(DataType.ENUM('male', 'female', 'other'))
  gender!: 'male' | 'female' | 'other';

  @Column(DataType.ENUM('admin', 'user'))
  role!: 'admin' | 'user';

  @AllowNull(false)
  @Column(DataType.DATE)
  dob!: Date;

  @AllowNull(false)
  @Column(DataType.DATE)
  createdAt!: Date;

  @AllowNull(false)
  @Column(DataType.DATE)
  updatedAt!: Date;
}
