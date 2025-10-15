const express = require("express");
const apiController = require("../controller/apiController");

const router = express.Router();

router.post('/add',apiController.add);
router.get('/find/:id',apiController.find);
router.put('/update/:id',apiController.update);
router.delete('/delete/:id',apiController.delete);

module.exports = router;