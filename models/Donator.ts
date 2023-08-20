import { Status } from './enums/Status'
import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../config/db';

export interface DonatorAttributes {
    nickname: string;
    name: string;
    phone: string;
    proposal_date: Date;
};

class Donator extends Model<DonatorAttributes> implements DonatorAttributes {
    public id!: number;
    public nickname!: string;
    public name!: string;
    public phone!: string;
    public proposal_date!: Date;
};

Donator.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    nickname: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    proposal_date: DataTypes.DATE
}, {
    timestamps: true,
    sequelize: sequelizeConnection
});

export default Donator;
