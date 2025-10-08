const todoController = require("../controller/todoController");
const express = require("express");

const router = express.Router();

router.post("/addtodo",todoController.addtodo);
router.get("/alltodo",todoController.alltodo);
router.get("/findtodo/:id",todoController.findtodo);
router.put("/updatetodo/:id",todoController.updatetodo);
router.delete("/deletetodo/:id",todoController.deletetodo);

module.exports = router;