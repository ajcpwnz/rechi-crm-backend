import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../config/db';

export interface ThingCompletedLinkAttributes {
    id: number;
    request_thing_id: number;
    donator_thing_id: number;
};

class ThingCompletedLink extends Model<ThingCompletedLinkAttributes> implements ThingCompletedLinkAttributes {
    public id!: number;
    public request_thing_id!: number;
    public donator_thing_id!: number;
};

ThingCompletedLink.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    request_thing_id: DataTypes.INTEGER,
    donator_thing_id: DataTypes.INTEGER
}, {
    timestamps: true,
    sequelize: sequelizeConnection
});

export default ThingCompletedLink;