const movieController = require("../controller/movieController");
const express = require("express");

const router = express.Router();

router.post('/add',movieController.add);
router.get('/add/:id',movieController.find);
router.put('/add/:id',movieController.update);
router.delete('/add/:id',movieController.delete);

module.exports = router;