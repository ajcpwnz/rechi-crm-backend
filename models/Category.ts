import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../config/db';

export interface CategoryAttributes {
    id: number;
    category: string;
};

class Category extends Model<CategoryAttributes> implements CategoryAttributes {
    public id!: number;
    public category!: string;
};

Category.init({
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

export default Category;