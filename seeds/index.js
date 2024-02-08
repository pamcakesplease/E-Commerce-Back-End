const sequelize = require('../config/connection');
const { Product, Category} = require('../models')

const productData = require('./productData.json')
const categoryData = require('./categoryData.json')

const seedAll = async () => {
  await sequelize.sync ({force: true});

  await Product.bulkCreate(productData);

  await Category.bulkCreate(categoryData);
 
  process.exit(0);
};

seedAll();