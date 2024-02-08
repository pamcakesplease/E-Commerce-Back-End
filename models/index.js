const Product = require('./Product');
const Category = require('./category');

Category.hasMany(Product);

module.exports = { Product, Category };