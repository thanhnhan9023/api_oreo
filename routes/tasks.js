const express = require('express');
const tasksController = require('../controllers/tasks');

// Router initialisation
const router = express.Router();

// CRUD
// Create (task) POST
router.post('/createCategory', tasksController.createTask);

// Read (task) GET ALL
router.get('/getALLCategory', tasksController.getAllCategory);

// Read (task) GET
router.get('/getCategory/:id', tasksController.getTask);

// Update (task) PATCH
router.patch('/updateCategory/:id', tasksController.updateTask);

// Delete (task) DELETE
router.post('/deleteCategory/:id', tasksController.deleteTask);

module.exports = router;