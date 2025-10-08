const countryController = require("../controller/countryController");
const express = require("express");

const router = express.Router();

router.post('/add',countryController.add);
router.delete('/add/:id',countryController.find);
router.get('/add/:id',countryController.update);
router.put('/add/:id',countryController.delete);

module.exports = router;