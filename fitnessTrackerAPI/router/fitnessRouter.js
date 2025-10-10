const express = require("express");
const fitnessController = require("../controller/fitnessController");

const router = express.Router();

router.post('/add',fitnessController.add);
router.get('/find/:id',fitnessController.find);
router.put('/update/:id',fitnessController.update);
router.delete('/delete/:id',fitnessController.delete);

module.exports = router;