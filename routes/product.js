const express = require('express');
const tasksController = require('../controllers/product');

const router = express.Router();

router.post('/createProduct', tasksController.createProduct);

// GET ALL category
router.get('/getALLProduct', tasksController.getAllProduct);

//  GET ID category
router.get('/getProduct/:id', tasksController.getTask);

// Update category
router.patch('/updateProduct/:id', tasksController.updateTask);

// Delete category
router.delete('/deleteProduct/:id', tasksController.deleteTask);

module.exports = router;