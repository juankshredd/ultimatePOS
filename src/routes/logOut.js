const express = require('express');
const LogOutController = require('../controllers/LogOutController');

const router = express.Router();

router.get('/logOut', LogOutController.logOut);

module.exports = router;
