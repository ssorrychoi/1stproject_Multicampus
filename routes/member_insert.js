var express = require('express');
var router = express.Router();
const mysql = require('mysql');

/* GET member_insert page. */
router.post('/', function(req, res, next) {
  const result = {msg:'Sign up Error'};
    
    let conn = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'mysql',
        database : '1stproject'
    });

    conn.connect((err)=>{
        if(err){
            return console.error(err.message);
        }
        console.log("Connected to the MySQL Server");
        const sql = `insert into member(id, password, name, id_num) values ('${req.body.user_id}','${req.body.pwd}','${req.body.name}','${req.body.user_num}')`;
        console.log(sql);
        conn.query(sql,(err,results,fields)=>{
            if(err){
                console.log(err.message);
                res.json(JSON.stringify(result));
            }else{
                console.log(results,fields);
                result.msg = req.body.name+"님, 가입되셨습니다.";
                res.json(JSON.stringify(result));
            }
            conn.end((err)=>{
                if(err){
                    return console.error(err.message);
                }
            });
        });
    });


  /* console.log("Session id => "+req.sessionID);
  req.session.user_id=req.body.user_id;
  req.session.pwd=req.body.pwd;
  req.session.name=req.body.name;
  req.session.user_num=req.body.user_num;
  const result={msg : req.body.name+", Signed up!"};
  res.json(JSON.stringify(result)); */
});

module.exports = router;