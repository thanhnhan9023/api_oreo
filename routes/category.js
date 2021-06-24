const express = require('express');
const tasksController = require('../controllers/tasks');

// Router initialisation
const router = express.Router();

// CRUD
//  POST add category
router.post('/createCategory', tasksController.createTask);

// GET ALL category
router.get('/getALLCategory', tasksController.getAllCategory);

//  GET ID category
router.get('/getCategory/:id', tasksController.getTask);

// Update category
router.patch('/updateCategory/:id', tasksController.updateTask);

// Delete category
router.delete('/deleteCategory/:id', tasksController.deleteTask);

module.exports = router;