const iventoryController = require("../controller/iventoryController");
const express = require("express");

const router = express.Router();

router.post('/add',iventoryController.add);
router.get('/find/:id',iventoryController.find);
router.put('/update/:id',iventoryController.update);
router.delete('/delete/:id',iventoryController.delete);

module.exports = router;