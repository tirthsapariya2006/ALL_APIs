const employeeDirectoryController = require("../controller/employeeDirectoryController");
const express = require("express");

const router = express.Router();

router.post('/add',employeeDirectoryController.add);
router.get('/find/:id',employeeDirectoryController.find);
router.put('/update/:id',employeeDirectoryController.update);
router.delete('/delete/:id',employeeDirectoryController.delete);

module.exports = router;