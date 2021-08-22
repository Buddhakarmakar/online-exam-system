var express = require('express');
var router=express.Router();
var db=require('../database');
router.get('/get-ques',function(req,res,next){
    var sql='select * from question ';
    db.query(sql,function(err,data,fields){
        if (err) throw err;
        if (data.length<1){
            console.log("No question Found");
        }
        else {
                res.render('show-ques',{title:"User Table",userData:data, email:req.session.emailAddress});
            }

        

         //   console.log(data)

        })


});

module.exports = router

