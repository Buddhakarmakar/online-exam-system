var express = require('express');
var route=express.Router();
var con=require('../admin/database.js');
route.get('/',function(req,res,next){
    res.render('dashboard');
    console.log('Viewing Dashboard.ejs');

})

route.get('/admin',function(req,res,next){
    res.render('admin_register');
    console.log("viewing admin_register");
})
route.get('/admin_signin',function(req,res,next){
    res.render('admin_signin');
    console.log('viewing Admin Login');
})




route.post('/admin_registration',function(req,res,next){

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
        inputData= {
            admin_first_name : req.body.first_name,
            admin_last_name :req.body.last_name,
            admin_password : req.body.password,
            admin_email : req.body.email,
            admin_created_at:dateTime

        }
       // console.log(req.body.email);


            sql='select * from admin_table where admin_email=?';
            con.query(sql,req.body.email,function(error,result){
                if (error) throw error;
                if (result.length==0){
                    register_sql="insert into admin_table set ?";
                    con.query(register_sql,inputData,function (error,result) {
                            if (error) throw error;
                        output={'success':true};
                        res.send(output);
                        console.log("Email Avabile");
                    })

                }
                else{
                    error={'emailError':true};
                    res.send(error);
                    console.log('Email ALredy Exists!!!');
                }
            });

        console.log("Registering User ")


})
route.post('/admin_signin',function(req,res,next){

            admin_email=req.body.email;
            admin_password=req.body.password;

    console.log('Trying to Signning in');
    checkEmailSql="select * from admin_table where admin_email=? ";
    con.query(checkEmailSql,req.body.email,function(error,result){
        if(error) throw error;
        if(result.length>0){
         //   checkPasswordSql="select * from admin_table where admin_email=? and admin_password=?";
            con.query("select * from admin_table where admin_email=? and admin_password=?",
                [admin_email,admin_password],function(error,result){
                if (error) throw error;
                if(result.length>0){

              //      console.log(result[0].admin_first_name);
               //     console.log(result[0].admin_last_name);
                    console.log("Email and password is correct");

                    req.session.adminSignin=true;
                    req.session.admin_email=req.body.email;
                    req.session.admin_id=result[0].admin_id;
                    req.session.admin_name=result[0].admin_first_name + result[0].admin_last_name;



                   output={'success':true};

                 res.send(output);




                }
                else{
                    invalidPwd={'invalidPassword':true};
                    res.send(invalidPwd);
                    console.log("Wrong Password");
                }
            })
        }
        else{
            console.log('Invalid Email');
            error={'invalidEmail':true};
            res.send(error);
        }
    })


})

/* GET users listing. */


module.exports=route