const productController = require("../controller/productController");
const express = require("express");

const router = express.Router();

router.post('/add',productController.add);
router.get('/find/:id',productController.find);
router.put('/update/:id',productController.update);
router.delete('/delete/:id',productController.delete);

module.exports = router;
