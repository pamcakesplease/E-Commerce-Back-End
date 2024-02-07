const userData = require('./productData.json');
const projectData = require('./categoryData.json');
const { Product, Category } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const products = await Product.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

  const categories = await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedDatabase();