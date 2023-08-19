import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../config/db';

export interface CommentAttributes {
    id: number;
    text: string;
};

export interface CommentInput {
    text: string
    adminId: number
}

class Comment extends Model<CommentAttributes, CommentInput> implements CommentAttributes {
    public id!: number;
    public text!: string;
};

Comment.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    text: DataTypes.STRING,
}, {
    timestamps: true,
    sequelize: sequelizeConnection
});

export default Comment
