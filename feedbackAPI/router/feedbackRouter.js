const feedbackController = require('../constroller/feedbackController')
const express = require('express');
const router = express.Router();

router.post('/',feedbackController.addfeedback)
router.get('/',feedbackController.getallfedback)
router.delete('/',feedbackController.deletefeedack)

module.exports = router;