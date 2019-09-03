var express = require('express');
var router = express.Router();
const mysql = require('mysql');

/* GET login page. */
router.post('/', function(req, res, next) {
  const result={msg:""};

  let conn = mysql.createConnection({     //2.연결
    host : 'localhost',
    user : 'root',
    password : 'mysql',
    database : '1stproject'
});

conn.connect((err)=>{
    if(err){
        return console.error(err.message);
    }

    console.log("Connected to the MySQL Server : ",req.body.user_id);
    const sql = `select * from member where id = '${req.body.user_id}'`;
    console.log(sql);
    conn.query(sql,(err,rs,fields)=>{
        if(err){
            console.log(err.message);
            result.msg='Try Again';
            res.json(JSON.stringify(result));
        }else{
            
            if(rs[0] && rs[0].id ){     //로그인 OK
                console.log(rs[0].name);
                console.log(rs[0].id);
                console.log(rs[0].password);
                req.session.user_id=req.body.user_id;
                //req.session.pwd = req.body.pwd;

               
                req.session.loginState=true;
                console.log(req.session.loginState);
                req.session.name=rs[0].name;
                
                result.msg="Login";
                console.log(result);
                
                res.json(JSON.stringify(result)); 
                res.redirect('/');
            }else{  //로그인 실패
                result.msg="Try Again";
                res.json(JSON.stringify(result));
            }
        }
        conn.end((err)=>{
            if(err){
                return console.error(err.message);
            }
            console.log("conn close");
        } );
    });
});




  /* if((req.session.user_id===req.body.user_id)&&(req.session.pwd===req.body.pwd)){
    req.session.loginState=true;
    res.redirect('/');
  }else{
    result.msg="Try again";
    res.json(JSON.stringify(result)); 
  }*/
});

module.exports = router;