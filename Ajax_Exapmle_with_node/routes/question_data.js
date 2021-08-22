var express=require('express');
var router=express.Router();
var con=require('../admin/database');
router.post('/admin_dashboard',function(req,res){

    console.log("######")
    if(req.session.adminSignin) {
        var sql = "select * from exam_table where admin_id=?";
        con.query(sql, req.session.admin_id, function (err, data) {
            if (err) throw err;
            if (data.length > 0) {
                console.log('data Found');

                var array = []
                for (i = 0; i < data.length; i++) {

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
                    var abc = {
                        exam_title: data[i].exam_title,
                        exam_time: data[i].exam_time,
                        exam_duration: data[i].exam_duration + ' minute',
                        exam_total_ques: data[i].total_ques,
                        marks_per_right_ans: data[i].marks_per_right_ans + " Marks",
                        marks_per_wrong_ans: data[i].marks_per_wrong_ans + ' Marks',

                        exam_status: exam_stat
                    };

                    array.push(abc);


                }
                console.log("***###")
                res.render("admin_dashboard",{email:req.session.admin_id});
             //   req.session.mydata=array
                console.log(",,,,.....!!!!!");;
            } else {
                console.log('No Exam found');
            }
        })
    }else{
        res.redirect('/admin_login');
    }
})



module.exports=router