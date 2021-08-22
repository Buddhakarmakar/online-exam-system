var express = require('express')
var router = express.Router();
var con=require('../admin/database')
router.post('/edit_exam',function(req,res){
    exam_id=req.body.exam_id;
    function convert(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }
    sql='select * from exam_table where admin_id=? and exam_id=?'
    con.query(sql,[req.session.admin_id,exam_id],function(err,result) {
        if (err) throw err;
        if (result.length > 0) {
            output = {
                exam_title: result[0].exam_title,
                exam_time: result[0].exam_time,
                exam_date: '"'+ convert(result[0].exam_date) + '"',
                exam_duration: result[0].exam_duration,
                marks_per_right_ans: result[0].marks_per_right_ans,
                marks_per_wrong_ans: result[0].marks_per_wrong_ans,
                exam_total_ques: result[0].total_ques,


            }

            res.send(output)
        }


        else{
            console.log("Cannot Find the exam id")
        }
    })
})

module.exports = router