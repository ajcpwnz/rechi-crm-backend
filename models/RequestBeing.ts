import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../config/db';
import { BeingSex } from "./enums/BeingSex";

export interface RequestBeingAttributes {
    id: number;
    request_id: number;
    name: string;
    being_type: BeingType;
    being_sex: BeingSex;
    nickname: string;
    age: number;
    note: string;
};

class RequestBeing extends Model<RequestBeingAttributes> implements RequestBeingAttributes {
    public id!: number;
    public request_id!: number;
    public name!: string;
    public being_type!: BeingType;
    public being_sex!: BeingSex;
    public nickname!: string;
    public age!: number;
    public note!: string;
};

RequestBeing.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    request_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    being_type: DataTypes.ENUM(''),
    being_sex: DataTypes.ENUM(''),
    nickname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    note: DataTypes.STRING
}, {
    timestamps: true,
    sequelize: sequelizeConnection
});

export default RequestBeing;
