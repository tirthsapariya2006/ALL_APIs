const express = require("express");
const projectController = require("../controller/projectCOntroller");

const router = express.Router();

router.post('/add',projectController.add);
router.get('/find/:id',projectController.find);
router.put('/update/:id',projectController.update);
router.delete('/delete/:id',projectController.delete);

module.exports = router;