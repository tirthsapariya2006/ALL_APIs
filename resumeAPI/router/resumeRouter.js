const express = require("express");
const router = express.Router();
const resumeController = require("../controller/resumeController")

router.post('/',resumeController.createresume);
router.get('/getallresume',resumeController.getallresume);
router.get('/getresumebyid',resumeController.getresumebyid);
router.put('/updateresume',resumeController.updateresume);
router.delete('/deleteresume',resumeController.deleteresume);

module.exports = router
