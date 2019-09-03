var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const result={msg:""};
    if(req.session.name&&req.session.user_num){
        req.session.destroy(function(err){
            res.redirect('/about');
        })
    }
});

module.exports = router;
