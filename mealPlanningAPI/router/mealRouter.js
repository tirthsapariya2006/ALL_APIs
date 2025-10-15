const express = require("express");
const mealController = require("../controller/mealController")

const router = express.Router();

router.post('/add',mealController.add);
router.get('/find/:id',mealController.find);
router.put('/update/:id',mealController.update);
router.delete('/dedlete/:id',mealController.delete);

module.exports = router;