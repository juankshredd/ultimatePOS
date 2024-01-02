const express = require('express');
const VentaController = require('../controllers/VentaController')

const router = express.Router();

router.get('/venta', VentaController.venta);
//router.get('/venta', VentaController.consultarCajero);
router.post('/venta/cliente', VentaController.consultarCliente);
router.post('/venta', VentaController.anularVenta);
router.post('/venta', VentaController.agregarProducto);
router.post('/venta', VentaController.eliminarProducto);

module.exports = router;
