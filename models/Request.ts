import Comment, { CommentInput } from './Comment'
import { Status } from './enums/Status'
import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config/db';
import { Status } from "./enums/Status";

export interface RequestAttributes {
    id: number;
    created_date: Date;
    actualization: Date;
    nickname: string;
    from_city: string;
    for_who: string;
    nova_post: string;
    post_index: string;
    name: string;
    phone: string;
    status: Status;
};

export interface RequestInput extends Optional<RequestAttributes, 'id'> {}

class Request extends Model<RequestAttributes, RequestInput> implements RequestAttributes {
    public id!: number;
    public created_date!: Date;
    public actualization!: Date;
    public nickname!: string;
    public from_city!: string;
    public for_who!: string;
    public nova_post!: string;
    public post_index!: string;
    public name!: string;
    public phone!: string;
    public status!: Status;

    getComments!: () => Promise<Comment[]>
    createComment!: (data: CommentInput) => Promise<any>
};

Request.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    created_date: DataTypes.DATE,
    actualization: DataTypes.DATE,
    nickname: DataTypes.STRING,
    from_city: DataTypes.STRING,
    for_who: DataTypes.STRING,
    nova_post: DataTypes.STRING,
    post_index: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    status: DataTypes.ENUM(
      'Completing',
      'Archival'
    ),
}, {
    timestamps: true,
    sequelize: sequelizeConnection
});

export default Request;
