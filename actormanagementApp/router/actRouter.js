const actController = require("../controller/actController");
const express = require("express");

const router = express.Router();

router.post('/add',actController.add);
router.get('/find/:id',actController.find);
router.put('/update/:id',actController.update);
router.delete('/delete/:id',actController.delete);

module.exports = router;