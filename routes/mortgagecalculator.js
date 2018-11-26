var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('calculate', { title: 'Mortgage Calculator' });
});

router.post('/name/:name', function(req, res, next){
  let firstName = req.params.name;
  res.render('calculate', { title: 'Calculate', firstName: firstName });
});

module.exports = router;
