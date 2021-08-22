const router=require('express').Router();
const Question=require("../models/questionShema")
const Exam =require('../models/examShema')
router.post('/check-ans',async (req, res)=>{

    let exam_id=req.body.exam_id
    let question_id=req.body.question_id
    let correct_ans=req.body.correct_ans
    let result=0


    let exam=await Exam.findOne({exam_id:exam_id}).exec()

            const marks_per_right_ans=exam['marks_per_right_ans']
            const marks_per_wrong_ans=exam['marks_per_wrong_ans']


    try{
        const isCorrect=await Question.findOne({
            question_id:question_id,
            correct_ans:correct_ans
        }).exec()
        if(isCorrect){
            console.log("ans matched")
            await res.status(200).json("Correct answer -:(")
            result= result + marks_per_right_ans

        }else{
            console.log("Ans does not match")
            result= result + marks_per_wrong_ans

            const correct_ques_ans=await Question.findOne({
                question_id:question_id,
                //correct_ans:correct_ans
            }).exec()
            await res.status(200).json("Ans does not match \n Correct ans is : "+correct_ques_ans['correct_ans'])
        }
      //  await res.status(200).json("Checking answer")

    }catch(e){
        console.log(e)
        await res.status(500).json("Bad result")
    }
    console.log("Result is :" +result)
} )

//generate
module.exports=router