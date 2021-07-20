const express = require('express');
const tasksController = require('../controllers/UserController');
const authToken=require('../Middleware/auth');

// Router initialisation
const router = express.Router();

router.post('/createUser', tasksController.creatUser);
//Login user
router.post('/LoginUser', tasksController.LoginUser);
//Refreshtoken
router.post('/RefreshToken', tasksController.RefreshToken);
//Get user
router.get('/GetUser',authToken,tasksController.GetUser);

module.exports = router;