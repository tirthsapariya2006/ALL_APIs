const employeecontroller = require("../controller/employeeController");
const express = require("express");

const router = express.Router();

router.post('/',employeecontroller.addemployee)
router.get('/',employeecontroller.findemployee)
router.put('/',employeecontroller.updateemployee)
router.delete('/',employeecontroller.deleteemployee)

module.exports = router;