const express = require('express');
const LoginController = require('../controllers/LoginController')

const router = express.Router();

router.get('/login', LoginController.login); //renderiza la pantalla de login
router.post('/login', LoginController.auth); //maneja la logica del login

module.exports = router;
