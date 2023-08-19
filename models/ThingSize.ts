import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../config/db';

export interface ThingSizeAttributes {
    id: number;
    thing_category_id: number;
    value: string;
};

class ThingSize extends Model<ThingSizeAttributes> implements ThingSizeAttributes {
    public id!: number;
    public thing_category_id!: number;
    public value!: string;
};

ThingSize.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    thing_category_id: DataTypes.INTEGER,
    value: DataTypes.STRING
}, {
    timestamps: true,
    sequelize: sequelizeConnection
});

export default ThingSize;