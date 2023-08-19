import { Status } from './enums/Status'
import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../config/db';

export interface DonatorThingAttributes {
    id: number;
    donate_id: number;
    thing_product_id: number;
    size_id: number;
    status: Status
    name: string;
    note: string;
    quantity: number;
    completed: number;
};

class DonatorThing extends Model<DonatorThingAttributes> implements DonatorThingAttributes {
    public id!: number;
    public donate_id!: number;
    public thing_product_id!: number;
    public size_id!: number;
    public status!: Status;
    public name!: string;
    public note!: string;
    public quantity!: number;
    public completed!: number;
};

DonatorThing.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    donate_id: DataTypes.INTEGER,
    thing_product_id: DataTypes.INTEGER,
    size_id: DataTypes.INTEGER,
    status: DataTypes.ENUM(),
    name: DataTypes.STRING,
    note: DataTypes.STRING,
    quantity: DataTypes.NUMBER,
    completed: DataTypes.NUMBER
}, {
    timestamps: true,
    sequelize: sequelizeConnection
});

export default DonatorThing;
