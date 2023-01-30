const { Sequelize } = require("sequelize");
const { dbSequelize } = require("../config/db");
const { DataTypes } = Sequelize;

const UsersModel = dbSequelize.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    judul: {
      type: DataTypes.STRING,
    },
    lokasi: {
      type: DataTypes.STRING,
    },
    penerbit: {
      type: DataTypes.STRING,
    },
    pengarang: {
      type: DataTypes.STRING,
    },
    tahunterbit: {
      type: DataTypes.STRING,
    },
    sinopsis: {
      type: DataTypes.STRING,
    },
    noInventaris: {
      type: DataTypes.STRING,
    },
    kategori: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "tersedia",
    },
    isDelete: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = UsersModel;
