const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const Product = require('./Product')(sequelize, Sequelize.DataTypes);
const Category = require('./Category')(sequelize, Sequelize.DataTypes);
const Tag = require('./Tag')(sequelize, Sequelize.DataTypes);
const ProductTag = require('./ProductTag')(sequelize, Sequelize.DataTypes);

Product.belongsTo(Category, { foreignKey: 'category_id' });
Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'product_id' });
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id' });

module.exports = { Product, Category, Tag, ProductTag };
