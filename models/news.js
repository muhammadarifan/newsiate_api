'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  News.init({
    news_category_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    sub_title: DataTypes.STRING,
    cover: DataTypes.STRING,
    description: DataTypes.TEXT('long'),
    content: DataTypes.TEXT('long'),
    is_show: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'News',
  });
  return News;
};