const { Sequelize } = require("sequelize");
const { dbSequelize } = require("../config/db");
const { DataTypes } = Sequelize;

const UsersModel = dbSequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    idnumber: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
    isDelete: {
      type: DataTypes.BOOLEAN,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "unverified",
    },
    foto: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = UsersModel;
