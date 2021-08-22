var express = require('express')
var router = express.Router();
var con=require('../admin/database')
router.post('/delete_exam',function(req, res){
    let exam_id=req.body.exam_id
   let sql='delete from exam_table where admin_id=? and exam_id=?'

    con.query(sql,[req.session.admin_id,exam_id],function(err,result){
        if(err) throw err;
        output={"success":true}
        res.send(output)
    })
})


module.exports=router