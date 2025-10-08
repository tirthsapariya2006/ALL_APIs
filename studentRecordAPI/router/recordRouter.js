const recordController = require("../controller/recordController");
const express = require("express");

const router = express.Router();

router.post('/add',recordController.add);
router.get('/add/:id',recordController.find);
router.put('/add/:id',recordController.update);
router.delete('/add/:id',recordController.delete);

module.exports = router;