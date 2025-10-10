const managerController = require("../controller/managerController");
const express = require("express");

const router = express.Router();

router.post('/add',managerController.add);
router.get('/find/:id',managerController.find);
router.put('/update/:id',managerController.update);
router.delete('/delete/:id',managerController.delete);

module.exports = router;