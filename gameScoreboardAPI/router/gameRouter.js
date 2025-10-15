const express = require("express");
const gameControler = require("../controller/gamController");

const router = express.Router();

router.post('/add',gameControler.add);
router.get('/find/:id',gameControler.find);
router.put('/update/:id',gameControler.update);
router.delete('/delete/:id',gameControler.delete);

module.exports = router