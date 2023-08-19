import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../config/db';

export interface DonatorAttributes {
    id: number;
    created_date: Date;
    nickname: string;
    from_city: string;
    name: string;
    phone: string;
    note: string;
    status: Status
    proposal_date: Date;
};

class Donator extends Model<DonatorAttributes> implements DonatorAttributes {
    public id!: number;
    public created_date!: Date;
    public nickname!: string;
    public from_city!: string;
    public name!: string;
    public phone!: string;
    public note!: string;
    public status!: Status;
    public proposal_date!: Date;
};

Donator.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    created_date: DataTypes.DATE,
    nickname: DataTypes.STRING,
    from_city: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    note: DataTypes.STRING,
    status: DataTypes.ENUM(),
    proposal_date: DataTypes.DATE
}, {
    timestamps: true,
    sequelize: sequelizeConnection
});

export default Donator;
