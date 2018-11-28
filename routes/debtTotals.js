var  express = require('express');
var router =  express.Router();

/* IMPORT CONTROLLERS*/
var debtController = require('../controllers/debtController');

/* GET users listing. */
router.get('/', debtController.index);

  
  module.exports = router;
