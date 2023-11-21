const express = require('express');
const RegistroController = require('../controllers/RegistroController')

const router = express.Router();

router.get('/registroCajero', RegistroController.registroCajero);
router.get('/registroCliente', RegistroController.registroCliente);
router.post('/registroCajero', RegistroController.guardarCajero);
router.post('/registroCliente', RegistroController.guardarCliente);

module.exports = router;
