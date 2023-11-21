const express = require('express');
const InventarioController = require('../controllers/InventarioController')

const router = express.Router();

router.get('/inventario', InventarioController.inventario);
router.get('/inventario', InventarioController.consultarProducto);
router.post('/inventario', InventarioController.guardarProducto);
router.put('/inventario', InventarioController.editarProducto);


module.exports = router;
