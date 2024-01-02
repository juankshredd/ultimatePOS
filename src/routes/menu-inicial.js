const express = require('express');
const MenuInicialController = require('../controllers/MenuInicialController')

const router = express.Router();

router.get('/menu-inicial', MenuInicialController.menuInicial);

module.exports = router;
