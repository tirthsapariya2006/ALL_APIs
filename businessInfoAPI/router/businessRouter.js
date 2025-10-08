const businessController = require("../controller/businessController");
const express = require('express');

const router = express.Router();

router.post('/add',businessController.add)
router.get('/find/:id',businessController.find)
router.put('/update/:id',businessController.update)
router.delete('/delete/:id',businessController.delete)

module.exports = router;