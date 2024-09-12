const prisma = require('../utils/db');

const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const newProduct = await prisma.product.create({
      data: { name, description, price, stock }
    });
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error creating product' });
  }
};

module.exports = { getProducts, createProduct };
