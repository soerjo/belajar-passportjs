import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/dbconnection";

interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
}

export class UserModel extends Model implements IUser {
  declare id: string;
  declare username: string;
  declare email: string;
  declare password: string;
}

UserModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    usename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "users",
  }
);
