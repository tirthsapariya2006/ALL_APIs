const musicController = require("../controller/musicController");
const express = require("express");

const router = express.Router();

router.post('/',musicController.addmusic);
router.get('/indmusic',musicController.findmusic);
router.delete('/deletemusic',musicController.deletemusic);

module.exports = router;