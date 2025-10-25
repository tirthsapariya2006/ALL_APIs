const busticketController = require("../controller/bustickerController");
const express = require("express");

const router = express.Router();

router.post('/add',busticketController.add);
router.get('/find/:id',busticketController.find);
router.put('/update/:id',busticketController.update);
router.delete('/delete/:id',busticketController.delete);

module.exports = router;