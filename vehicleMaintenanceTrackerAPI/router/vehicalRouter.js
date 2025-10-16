const vehicalController = require('../controller/vehicalController');
const express = require('express');

const router = express.Router();

router.post('/add',vehicalController.add);
router.get('/find/:id',vehicalController.find);
router.put('/update/:id',vehicalController.update);
router.delete('/delete/:id',vehicalController.delete);

module.exports = router;