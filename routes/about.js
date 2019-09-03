var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session.user_num);
  res.render('about', {id:req.session.user_id,name:req.session.name,user_num:req.session.user_num});
});

module.exports = router;
