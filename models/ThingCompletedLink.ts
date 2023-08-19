import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../config/db';

export interface ThingCompletedLinkAttributes {
    id: number;
    request_think_id: number;
    donate_think_id: number;
};

class ThingCompletedLink extends Model<ThingCompletedLinkAttributes> implements ThingCompletedLinkAttributes {
    public id!: number;
    public request_think_id!: number;
    public donate_think_id!: number;
};

ThingCompletedLink.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    request_think_id: DataTypes.INTEGER,
    donate_think_id: DataTypes.INTEGER
}, {
    timestamps: true,
    sequelize: sequelizeConnection
});

export default ThingCompletedLink;