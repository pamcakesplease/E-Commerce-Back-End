const router = require('express').Router();

const productRoutes = require('./product-routes.js');
const categoryRoutes = require('./category-routes.js');

router.use('/products', productRoutes);
router.use('/category', categoryRoutes);

module.exports = router;