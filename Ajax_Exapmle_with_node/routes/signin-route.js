var express = require('express');
var router = express.Router();
var con=require('../admin/database.js');
router.get('/admin_dashboard',async function(req,res){
    if(req.session.adminSignin) {
        console.log(req.session.admin_email);
        console.log(req.session.admin_first_name);
        con.query('select * from admin_table where admin_email=?',req.session.admin_email,
            function(err,data){
                     if (err) throw err;
      //   var result=data;
           // res.render('admin_dashboard', {title:"Admin Panel",userData:data,email:req.session.admin_email});

        })
        function convert(str) {
            var date = new Date(str),
                mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                day = ("0" + date.getDate()).slice(-2);
            return [date.getFullYear(), mnth, day].join("-");
        }
        var sql = "select * from exam_table where admin_id=?";
        await   con.query(sql, req.session.admin_id, function (err, data) {
            if (err) throw err;
            if (data.length > 0) {
                console.log('data Found');

                var array = []
                for (i = 0; i < data.length; i++) {
                    var today = new Date();
                    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    stat_array = []
                    exam_action_stat = {}
                    exam_action_array = []
                    exam_action = {}

                    const checkData = async (data)=>
                    {

                        await  con.query("select * from question_table where exam_id=?", data,
                                 rs= function (err, result) {
                                if (err) throw err;
                               console.log(result.length)
                                return result.length
                                //   l=result.length;
                            })
                        return await rs
                    }

                    console.log( checkData(data[i].exam_id))
                    if(new Date(data[i].exam_date) > new Date(date) ){
                        exam_action='<button class="btn btn-primary edit_exam" id="' + data[i].exam_id + '">Edit</button>' +
                            '<br><button class="btn btn-danger delete_exam" id="' + data[i].exam_id + '">' + 'Delete</button>'
                        ;
                    }
                    else {
                        exam_action='<button class="btn btn-warning" id="' + data[i].exam_id + '">' + 'View Exam</button>';

                    }

                /*  var  getMyQuestion = function(id, callback) {
                        var query = con.query('select * from question_table where exam_id = ?' ,id, function(err, result) {
                            callback(null, result.length);
                        });
                    }
          var  addd=        getMyQuestion(data[i].exam_id,function(err,len){
                        console.log(len)
                    })


        console.log(addd)

        *
                 */
                    if(new Date(data[i].exam_date) > new Date(date) ){
                        exam_action_stat='<button class="btn btn-primary" id="' + data[i].exam_id + '">' + 'Add Question</button> <br>';
                    }
                    else {
                        exam_action_stat='<button class="btn btn-warning" id="' + data[i].exam_id + '">' + 'View Question</button>';

                    }
                    stat_array.push(exam_action_stat)
                    exam_stat = {};
                    var aabc = {}
                    if (data[i].exam_status === 'Pending') {
                        exam_stat = '<span class="badge badge-warning">Pending</span>';
                    }
                    if (data[i].exam_status === 'Created') {
                        exam_stat = '<span class="badge badge-primary">Created</span>';
                    }
                    if (data[i].exam_status === 'Completed') {
                        exam_stat = '<span class="badge badge-dark">Completed</span>';
                    }
                    if (data[i].exam_status === 'Started') {
                        exam_stat = '<span class="badge badge-success">Success</span>';
                    }
                    stat_array.push(exam_stat)
                    var abc = {
                        exam_title: data[i].exam_title,
                        exam_time: convert(data[i].exam_date) + '<br><h6 class="bg-light text-dark ">  ' +data[i].exam_time +'</h3>',
                        exam_duration: data[i].exam_duration + ' minute',
                        exam_total_ques: data[i].total_ques,
                        marks_per_right_ans: "+" +data[i].marks_per_right_ans + " Marks",
                        marks_per_wrong_ans: "-" +data[i].marks_per_wrong_ans + 'Marks',
                        exam_action:exam_action,
                        exam_status:stat_array
                    };

                    array.push(abc);


                }
                console.log("***###")
                res.render("admin_dashboard",{email:req.session.admin_name,mydata:array});
                //   req.session.mydata=array
                console.log(",,,,.....!!!!!");;
            } else {
                console.log('No Exam found');
            }
        })

    }
    else{
        res.render('admin_signin');
    }
})



module.exports = router