const ecommerceController = require("../controller/ecommerceController");
const express = require("express");

const router = express.Router();

router.post('/add',ecommerceController.add);
router.get('/find/:id',ecommerceController.find);
router.put('/update/:id',ecommerceController.update);
router.delete('/delete/:id',ecommerceController.delete);

module.exports = router;