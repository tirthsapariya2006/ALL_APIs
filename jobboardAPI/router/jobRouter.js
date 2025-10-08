const jobcontroller = require('../controller/jobController');
const express = require("express")

const router = express.Router();
 
router.post('/add',jobcontroller.addjob);
router.post('/find/:id',jobcontroller.findjob);
router.post('/update/:id',jobcontroller.updatejob);
router.post('/delete/:id',jobcontroller.deletejob);

module.exports = router;