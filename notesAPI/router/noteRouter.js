const express = require('express');
const noteController = require("../controller/noteController");

const router = express.Router();

router.post("/add",noteController.add);
router.get("/find/:id",noteController.find);
router.put("/update/:id",noteController.update);
router.delete("/delete/:id",noteController.delete);

module.exports = router;