import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../config/db';

export interface RequestThingAttributes {
    id: number;
    request_being_id: number;
    thing_product_id: number;
    thing_size_id: number;
    name: string;
    quantity: number;
    completed: number;
    status: Status;
};

class RequestThing extends Model<RequestThingAttributes> implements RequestThingAttributes { 
    public id!: number;
    public request_being_id!: number;
    public thing_product_id!: number;
    public thing_size_id!: number;
    public name!: string;
    public quantity!: number;
    public completed!: number;
    public status!: Status;
};

RequestThing.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    request_being_id: DataTypes.INTEGER,
    thing_product_id: DataTypes.INTEGER,
    thing_size_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    quantity: DataTypes.NUMBER,
    completed: DataTypes.NUMBER,
    status: DataTypes.ENUM
}, {
    timestamps: true,
    sequelize: sequelizeConnection
});

export default RequestThing;