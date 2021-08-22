var express =require("express");
var router=express.Router();

var con=require('../admin/database');
router.post('/add_exam',function(req,res){
    if(req.session.adminSignin) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        con.query('select * from admin_table where admin_email=?', req.session.admin_email, function (err, result) {
            if (err) throw err;
            if (result.length > 0) {
                admin_id = result[0].admin_id;
                inputData = {
                    admin_id: admin_id,
                    exam_title: req.body.exam_title,
                    exam_time: req.body.exam_time,
                    exam_date: req.body.exam_date,
                    exam_duration: req.body.exam_duration,
                    marks_per_right_ans: req.body.marks_per_right_ans,
                    marks_per_wrong_ans: req.body.marks_per_wrong_ans,
                    total_ques: req.body.total_ques,
                    exam_created_on: dateTime,
                    exam_status: "Pending"
                }
                sql = "insert into exam_table set ?";
                con.query(sql, inputData, function (err, result) {
                    if (err) throw err;
                    console.log("Exam added");
                    output = {'success': true}
                    res.send(output)
                })
            }
        })
    }
           else{
               res.redirect('/admin_login');
               console.log('Log in first')
           }



})
router.get('/add_exam',function(req,res){
    console.log("trying to se add exam")
    res.render('admin_signin')
})
module.exports = router