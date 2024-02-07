const { Product, Category } = require('../models');
const sequelize = require('../config/connection');
const productData = require('./productData.json');
const categoryData = require('./categoryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const Product = await Product.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

  const Category = await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedDatabase();