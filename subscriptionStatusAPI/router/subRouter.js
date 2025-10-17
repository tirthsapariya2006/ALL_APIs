const subController = require('../controller/subController');
const express = require('express');

const router = express.Router();

router.post('/add',subController.add);
router.get('/find/:id',subController.find);
router.put('/update/:id',subController.update);
router.delete('/delete/:id',subController.delete);

module.exports = router;