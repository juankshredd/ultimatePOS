const express = require('express');
const PagoController = require('../controllers/PagoController')

const router = express.Router();

router.get('/pago', PagoController.pago);


module.exports = router;
