import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../config/db';

export interface ThingProductAttributes {
    id: number;
    thing_category_id: number;
    product: string;
};

class ThingProduct extends Model<ThingProductAttributes> implements ThingProductAttributes {
    public id!: number;
    public thing_category_id!: number;
    public product!: string;
};

ThingProduct.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    thing_category_id: DataTypes.INTEGER,
    product: DataTypes.STRING
}, {
    timestamps: true,
    sequelize: sequelizeConnection
});

export default ThingProduct;