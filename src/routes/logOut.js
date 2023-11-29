const express = require('express');
const LogOutController = require('../controllers/LogOutController');

const router = express.Router();

router.get('/logout', LogOutController.logout);

module.exports = router;
