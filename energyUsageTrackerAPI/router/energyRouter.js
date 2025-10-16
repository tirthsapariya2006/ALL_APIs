const energyController = require('../controller/energyController');
const express = require('express');

const router = express.Router();

router.post('/add',energyController.add);
router.get('/find/:id',energyController.find);
router.put('/update/:id',energyController.update);
router.delete('/delete/:id',energyController.delete);

module.exports = router;