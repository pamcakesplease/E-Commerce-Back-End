const router = require('express').Router();
const { Product, Category } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const dbProduct = await Product.findAll({
      include: [{ model: Category  }],
  });
  res.status(200).json(dbProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;