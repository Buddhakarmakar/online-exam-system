var mysql=require("mysql");
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Buddha',
    database:'quiz'
})
con.connect(function(err){
    if (err ) throw err;
    console.log("Database Connected!")
})

con.checkData=function(data){


   con.query("select * from question_table where exam_id=?",data,
        function(err,result){
        if(err) throw err;
           console.log(result.length)
        return result.length
         //   l=result.length;
        })
    return 0
}

con.checkQues=async (exam_id) =>{
    const sql="select * from question_table where exam_id=?"

}
module.exports=con