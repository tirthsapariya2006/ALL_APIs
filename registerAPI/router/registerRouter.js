const registerConteroller = require("../controller/registerController")
const express = require("express")

const router = express.Router()

router.post('/',registerConteroller.addstudent);
router.get('/',registerConteroller.getallstudents);
router.get('/',registerConteroller.findstudent);
router.put('/',registerConteroller.updatestudent);
router.delete('/',registerConteroller.deletestudent);

module.exports = router;