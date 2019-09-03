var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    const result={msg:""};
    if(req.session.user_id){
        req.session.destroy(function(err){
            res.redirect('/');
        })
    }
});

module.exports = router;
