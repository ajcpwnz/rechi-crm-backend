import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config/db';
import bCrypt from 'bcryptjs'

export interface AdminAttributes {
  id: number;
  display_name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface AdminInput extends Optional<AdminAttributes, 'id'> {}
export interface AdminOuput extends Required<AdminAttributes> {}

class Admin extends Model<AdminAttributes, AdminInput> implements AdminAttributes {
  public id!: number
  public display_name!: string
  public email!: string
  public password!: string

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Admin.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  email: DataTypes.STRING,
  display_name: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  timestamps: true,
  sequelize: sequelizeConnection,
  defaultScope: {
    attributes: { exclude: ['password'] },
  },
  scopes: {
    login: {
      attributes: { include: ['password'] },
    }
  },
  hooks: {
    beforeCreate: async (user) => {
      if (user.password) {
        const salt = await bCrypt.genSaltSync(10);

        user.password = bCrypt.hashSync(user.password, salt);
      }
    }
  }
})

export default Admin
