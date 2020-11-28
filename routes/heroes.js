var express = require('express');
var router = express.Router();

var heroeController = require('../controllers/heroeController')

/* GET users listing. */
router.get('/', heroeController.heroe());

module.exports = router;
