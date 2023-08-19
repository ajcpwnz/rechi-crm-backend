import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../config/db';

export interface ThingCategoryAttributes {
    id: number;
    category: string;
};

class ThingCategory extends Model<ThingCategoryAttributes> implements ThingCategoryAttributes {
    public id!: number;
    public category!: string;
};

ThingCategory.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    category: DataTypes.STRING
}, {
    timestamps: true,
    sequelize: sequelizeConnection
});

export default ThingCategory;