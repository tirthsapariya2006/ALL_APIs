const express = require('express');
const artController = require('../controller/artController');

const router = express.Router();

router.post('/add',artController.add);
router.get('/find/:id',artController.find);
router.put('/update/:id',artController.update);
router.delete('/delete/:id',artController.delete);

module.exports = router;