const studentController = require("../controller/studentController");
const express = require("express");

const router = express.Router();

router.post('/add',studentController.add);
router.get('/find/:id',studentController.find);
router.put('/update/:id',studentController.update);
router.delete('/delete/:id',studentController.delete);

module.exports = router;