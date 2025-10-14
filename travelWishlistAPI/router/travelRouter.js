const travelController = require("../controller/travelController");
const express = require("express");

const router = express.Router();

router.post('/add',travelController.add);
router.get('/find/:id',travelController.find);
router.put('/update/:id',travelController.update);
router.delete('/delete/:id',travelController.delete);

module.exports = router;