const listController = require("../Controller/listController");
const express = require("express");

const router = express.Router();

router.post('/add',listController.add);
router.get('/getAll',listController.getAll);
router.get('/find/:id',listController.find);
router.put('/update/:id',listController.update);
router.delete('/delete/:id',listController.delete);

module.exports = router;