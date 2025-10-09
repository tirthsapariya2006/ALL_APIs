const clientAndInvoiceManagerController = require("../controller/clientAndInvoiceManagerController");
const express = require("express");

const router = express.Router()

router.post('/add',clientAndInvoiceManagerController.add);
router.get('/find/:id',clientAndInvoiceManagerController.find);
router.put('/update/:id',clientAndInvoiceManagerController.update);
router.delete('/delete/:id',clientAndInvoiceManagerController.delete);

module.exports = router;