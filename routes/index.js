var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.redirect('/catalog');
});

/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'woop woop' });
});

router.get('/wow/',function(req, res, next){
  res.send('wow wow wow');
});
*/

module.exports = router;
