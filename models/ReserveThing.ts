import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../config/db';

export interface ReserveThingAttributes {
    id: number;
    admin_id: number;
    created_date: Date;
    thing_product_id: number;
    thing_size_id: number
    donater_id: number;
    for_who: string;
    city: string;
    nova_post: string;
    post_index: number;
    note: string;
};

class ReserveThing extends Model<ReserveThingAttributes> implements ReserveThingAttributes {
    public id!: number;
    public admin_id!: number;
    public created_date!: Date;
    public thing_product_id!: number;
    public thing_size_id!: number;
    public donater_id!: number;
    public for_who!: string;
    public city!: string;
    public nova_post!: string;
    public post_index!: number;
    public note!: string;
};

ReserveThing.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    admin_id: DataTypes.INTEGER,
    created_date: DataTypes.DATE,
    thing_product_id: DataTypes.INTEGER,
    thing_size_id: DataTypes.INTEGER,
    donater_id: DataTypes.INTEGER,
    for_who: DataTypes.STRING,
    city: DataTypes.STRING,
    nova_post: DataTypes.STRING,
    post_index: DataTypes.STRING,
    note: DataTypes.STRING
}, {
    timestamps: true,
    sequelize: sequelizeConnection
});

export default ReserveThing;