var express = require("express");
var router=express.Router();

var db=require('../database');
router.get('/admin-panel',function(req,res,next){
    res.render('add-ques');
})
router.post('/admin-panel',function(req,res,next){
    var inputData={
        qname:req.body.qname,
        opt1:req.body.opt1,
        opt2:req.body.opt2,
        opt3:req.body.opt3,
        opt4:req.body.opt4,
        ans:req.body.opt1


    };
    var insert_ques="insert into question set ?";
    db.query(insert_ques,inputData,function(err){
        if (err) throw err;
        console.log("Question Inserted into the table")

        res.render('add-ques',{myMsg:"Question Inserted into the table"});
    })
});
module.exports=router;