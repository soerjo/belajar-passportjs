import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/dbconnection";

export interface IUser {
  id: string;
  name: string;
  iduser: string;
}

export const UserGoogleModel = sequelize.define<IUser & Model>(
  "user-google",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    iduser: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "user-googles",
  }
);
