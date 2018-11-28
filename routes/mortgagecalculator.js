var express = require('express');
var router = express.Router();
var mortgageController = require('../controllers/mortgageCalculatorController');

/* GET users listing. */
router.get('/', mortgageController.index);

router.post('/:name',mortgageController.index);

module.exports = router;
