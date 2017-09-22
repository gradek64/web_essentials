var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Express' });
});


/* POST */
router.post('/uploads', function(req, res, next) {

});


module.exports = router;
