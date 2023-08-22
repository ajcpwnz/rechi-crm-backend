import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../config/db';

export interface DonatorThingAttributes {
    donator_id: number;
    product_id: number;
    size_id: number;
    quantity: number;
};

class DonatorThing extends Model<DonatorThingAttributes> implements DonatorThingAttributes {
    public id!: number;
    public donator_id!: number;
    public product_id!: number;
    public size_id!: number;
    public quantity!: number;
};

DonatorThing.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    donator_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    size_id: DataTypes.INTEGER,
    quantity: DataTypes.NUMBER,
}, {
    timestamps: true,
    sequelize: sequelizeConnection
});

export default DonatorThing;
