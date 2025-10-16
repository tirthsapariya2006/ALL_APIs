const podcastController = require('../controller/podcastController');
const express = require('express');

const router = express.Router();

router.post('/add',podcastController.add);
router.get('/find/:id',podcastController.find);
router.put('/update/:id',podcastController.update);
router.delete('/delete/:id',podcastController.delete);

module.exports = router;