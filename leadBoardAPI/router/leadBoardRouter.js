const leadBoardController = require("../controller/leadBoardController")
const express = require("express")

const router = express.Router()

router.post('/add',leadBoardController.add);
router.get('/find/:id',leadBoardController.find);
router.put('/update/:id',leadBoardController.update);
router.delete('/delete/:id',leadBoardController.delete);

module.exports = router;
