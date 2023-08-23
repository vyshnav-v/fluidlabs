

import Product from "../Models/ProductModel.js";

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new product
export const createProduct = async (req, res) => {
  try {
       const { name, price, description, category } = req.body;

    const product = new Product({ name, price, description, category });
    await product.save();
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Update a product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params; // Extract product ID from URL parameter
    const { name, price, description, category } = req.body;

    // Find the product by ID and update its properties
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, description, category },
    //   { new: true } // Return the updated document
    );

    if (updatedProduct) {
      res.status(200).json({ message: 'Product updated successfully', updatedProduct });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params; // Extract product ID from URL parameter

    // Find the product by ID and delete it
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (deletedProduct) {
      res.status(200).json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};