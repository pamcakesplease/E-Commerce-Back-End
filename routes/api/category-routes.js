const router = require('express').Router();
const { Product, Category } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const dbCategory = await Category.findAll({
      include: [{ model: Product }],
  });
  res.status(200).json(dbCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

  module.exports = router;