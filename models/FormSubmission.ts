import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config/db';

export interface FormSubmissionAttributes {
  id: number;
  fields: string;
  type: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}


export interface FormSubmissionInput extends Optional<FormSubmissionAttributes, 'id'> {}
export interface FormSubmissionOuput extends Required<FormSubmissionAttributes> {}

class FormSubmission extends Model<FormSubmissionAttributes, FormSubmissionInput> implements FormSubmissionAttributes {
  public id!: number;
  fields!: string;
  type!: string;
}

FormSubmission.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  type: DataTypes.STRING,
  fields: DataTypes.JSON
}, {
  timestamps: true,
  sequelize: sequelizeConnection,
})

export default FormSubmission
