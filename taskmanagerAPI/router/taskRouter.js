const taskController = require("./controller/taskController");
const express = require("express");

const router = express.Router();

router.post('/',taskController.addtask);
router.get('/findtask',taskController.findtask);
router.put('/updatetask',taskController.updatetask);
router.delete('/deletetask',taskController.deletetask);

module.exports = router;