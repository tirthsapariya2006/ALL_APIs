const express = require('express');
const customerController = require('../controller/customerContorller');

const router = express.Router();

router.post('/add',customerController.add);
router.get('/find/:id',customerController.find);
router.put('/update/:id',customerController.update);
router.delete('/delete/:id',customerController.delete);

module.exports = router;