const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Tag extends Model {}

  Tag.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      tag_name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'tag',
    }
  );

  return Tag;
};
