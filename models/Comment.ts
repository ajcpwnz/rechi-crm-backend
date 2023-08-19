import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../config/db';

export interface CommentAttributes {
    id: number;
    text: string;
    authorId: number;
    requestId: number;
};

export interface CommentInput {
    text: string
    authorId: number
    requestId: number
}

class Comment extends Model<CommentAttributes, CommentInput> implements CommentAttributes {
    public id!: number;
    public text!: string;
    authorId!: number
    requestId!: number
};

Comment.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    text: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    requestId: DataTypes.INTEGER
}, {
    timestamps: true,
    sequelize: sequelizeConnection
});

export default Comment
