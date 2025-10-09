const wishlistController = require("../controller/wishlistController");
const express = require("express");

const router = express.Router();

router.post('/add',wishlistController.add);
router.get('/add/:id',wishlistController.find);
router.put('/add/:id',wishlistController.update);
router.delete('/add/:id',wishlistController.delete);

module.exports = router;