const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

// Create product (Admin only)
router.post('/products', authMiddleware.protect, authMiddleware.isAdmin, createProduct);

// Get all products
router.get('/products', getAllProducts);

// Get a single product by ID
router.get('/products/:id', getProductById);

// Update product (Admin only)
router.put('/products/:id', authMiddleware.protect, authMiddleware.isAdmin, updateProduct);

// Delete product (Admin only)
router.delete('/products/:id', authMiddleware.protect, authMiddleware.isAdmin, deleteProduct);

module.exports = router;
