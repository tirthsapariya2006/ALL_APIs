const videoController = require("../controller/videoCOntroller");
const express = require("express");

const router = express.Router();

router.post('/add',videoController.add);
router.get('/find/:id',videoController.find);
router.put('/update/:id',videoController.update);
router.delete('/delete/:id',videoController.delete);

module.exports = router;