const userController = require('../controller/userController');
const express = require('express');

const router = express.Router();

router.post('/add',userController.add);
router.get('/add/:id',userController.find);
router.put('/add/:id',userController.update);
router.delete('/add/:id',userController.delete);

module.exports = router;