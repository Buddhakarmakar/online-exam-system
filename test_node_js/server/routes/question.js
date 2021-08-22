var router=require('express').Router();
const Question=require("../models/questionShema")
// add-question
router.post('/add-question',async (req,res)=>{

    let question=await new Question({
        exam_id:req.body.exam_id,
        question_id:req.body.question_id,
        question_title:req.body.question_title,
      //  options:req.body.option1,
       // options:req.body.option2,
        correct_ans:req.body.correct_ans
    })
    if(req.body.option1){

        question.options.push(req.body.option1)
    }
    if(req.body.option2) {
        question.options.push(req.body.option2)
    }
    if(req.body.option3) {
        question.options.push(req.body.option3)
    }
    if(req.body.option4) {
        question.options.push(req.body.option4)
    }
    if(req.body.option5) {
        question.options.push(req.body.option5)
    }
    try{
        await question.save()
            .then(doc=>{
                console.log(doc)
                console.log(doc.length)
                res.status(200).json("question added");
            })

    }catch(e){
        console.log(e)
        res.status(500).json(e)
    }
    //res.status(200).json("question added");
})
// delete-question
router.delete('/delete-question/:question_id',async (req,res)=>{

    let question_id=req.params["question_id"]
    console.log(req.params["question_id"])

        await Question.deleteOne({question_id:question_id})
            .then(response=>{
                console.log(response)
                res.status(200).json("Question deleted")


        })
            .catch(e=>{
        console.log(e)
         res.status(500).json(e)
    })


})
//delete all question

//update question
router.put('/update-question/:question_id',async (req,res)=>{
    let question_id=req.params["question_id"]
    console.log(question_id)

    try{
        await Question.findOneAndUpdate(
             {question_id:question_id},
            {$set:req.body}
            )
            .then(doc=>{
                console.log(doc)
                res.status(200).json('Updated')
            })
    }catch(e){
        console.log(e)
        res.status(400).json('bad request')
    }
  //  res.status(200).json("uptaded "+question_id)
})

//Show all question

router.get('/get-all-question/:exam_id',async (req,res)=>{
    let exam_id=req.params['exam_id']
    try{
        await Question.find({exam_id:exam_id}).limit(10)
            .then(doc=>{
                doc.map((question)=>{
                    console.log( "Question :"+question['question_title'])
                    console.log( "Options :")
                    console.log(question['options'].map((options)=>options  ))
                    console.log( "Correct ans :"+question['correct_ans'])
                    res.status(200).json(doc)
                })


            })
    }catch(e){
        console.log(e)
         await res.status(403).json("Bad request")
    }



})
module.exports=router
