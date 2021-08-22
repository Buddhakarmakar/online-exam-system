const mongoose = require('mongoose')

const examSchema=  new mongoose.Schema(
    {
        admin_id:String,
        exam_id:{
            type:String,
            unique:true
        },
        exam_title:String,
        exam_duration:Number,
        exam_date:{
            type:Date,
            min:Date.now()
        },
        exam_time:{
            type:String
        },
        no_of_question:Number,
        marks_per_right_ans:Number,
        marks_per_wrong_ans:Number



    }
)
module.exports =mongoose.model('exam_schema',examSchema)