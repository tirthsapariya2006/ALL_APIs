const eventController = require('../controller/eventController');
const express = require('express');

const router = express.Router();

router.post('/add',eventController.add);
router.get('/find/:id',eventController.find);
router.put('/update/:id',eventController.update);
router.delete('/delete/:id',eventController.delete);

module.exports = router;