'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cars.init({
    name: DataTypes.STRING,
    sewa: DataTypes.INTEGER,
    photo: { 
     type: DataTypes.TEXT,
     defaultValue: "user-default.jpg",
    },
  }, {
    sequelize,
    modelName: 'Cars',
  });
  return Cars;
};