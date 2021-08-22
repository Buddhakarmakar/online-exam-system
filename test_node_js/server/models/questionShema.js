const mongoose = require('mongoose')

const questionShema=  new mongoose.Schema(

    {
                exam_id:String,
                question_id:{
                    type:String,
                    unique:true

                },
                question_title:String,
                options:[String],
                correct_ans:String,

    }
)
module.exports =mongoose.model('questionShema',questionShema)
