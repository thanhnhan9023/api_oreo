const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/UserCookieController');



router.post('/PostUser', tasksController.createUserCoookie);
router.post('/DeleteAllUser', tasksController.deleteAllCookie);
router.get('/GetAllUser', tasksController.getAllCookie);

module.exports = router;