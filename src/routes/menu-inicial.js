const express = require('express');
const MenuInicialController = require('../controllers/MenuInicialController')

const router = express.Router();

router.get('/menu-inicial', MenuInicialController.menuInicial);
router.get('/menu-inicial', MenuInicialController.irRegistroCliente);

module.exports = router;
