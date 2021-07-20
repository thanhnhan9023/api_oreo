const express = require('express');
const tasksController = require('../controllers/ProductController');
const router = express.Router();
const auth=require('../Middleware/auth');

router.post('/createProduct', tasksController.createProduct);

// GET ALL category
router.get('/getALLProduct',tasksController.getAllProduct);

//  GET ID category
router.get('/getProduct/:id', tasksController.getTask);
// GET product to id category
router.get('/getProductIdcategory/:id', tasksController.getProductIdcategory);
// Update category
router.patch('/updateProduct/:id', tasksController.updateTask);

// Delete category
router.delete('/deleteProduct/:id', tasksController.deleteTask);

module.exports = router;