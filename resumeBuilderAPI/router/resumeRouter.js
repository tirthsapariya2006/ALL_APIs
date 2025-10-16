const resumeController = require("../controller/resumeController");
const express = require("express");

const router = express.Router();

router.post('/add',resumeController.add);
router.get('/find/:id',resumeController.find);
router.put('/upadte/:id',resumeController.update);
router.delete('/delete/:id',resumeController.delete);

module.exports = router;