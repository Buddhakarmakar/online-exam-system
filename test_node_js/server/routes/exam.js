const router = require('express').Router()
const Exam=require('../models/examShema')
//create exam
router.post('/create-exam', async (req, res)=>{
    let new_exam=await  new Exam({
        admin_id:req.body.admin_id,
        exam_id:req.body.exam_id,
        exam_title:req.body.exam_title,
        exam_duration:req.body.exam_duration,
        exam_date:req.body.exam_date,
        exam_time:req.body.exam_time,
        no_of_question:req.body.no_of_question,
        marks_per_right_ans:req.body.marks_per_right_ans,
        marks_per_wrong_ans:req.body.marks_per_wrong_ans
    })
    try{
        await new_exam.save()
            .then(doc=>{
                console.log(doc)
                res.status(200).json("Exam Created")

            })
    }catch(err){
        console.log(err)
        res.status(404).json("Failed to create exam")
    }
})
//get exam
router.post('/get-exam',async (req, res)=>{
   // const email=req.query['admin_id']
    const email=req.body.email
    try {
        const exam=await Exam.find({admin_id:email})
            .then(doc=>{
            console.log(doc)
                res.status(200).json(doc)
        })

    }catch(err){
        console.log(err)

    }
})
//delete exam
router.delete('/delete-exam/:exam_id',async (req, res)=>{
    let exam_id=req.params['exam_id']
    console.log(exam_id)
    try{
        await Exam.deleteOne({exam_id:exam_id})
            .then(doc=>{
                console.log(doc)
            })
        res.status(200).json("Deleted")
    }catch(err){
        console.log(err)
        res.status(404).json("Bad request")
    }


})

//update exam
router.put('/update-exam/:exam_id',async (req, res)=>{
    const exam_id=req.params['exam_id']
    try{
        const updateExam=await Exam.findOneAndUpdate(
            {exam_id:exam_id},
            {$set:req.body}
            ).exec()
        if(updateExam){
            console.log('Exam Updated & exam_id: '+exam_id)
            await res.status(200).json(" Exam Updated")
        }

    }catch(err){
        console.log(err)
        await res.status(404).json("Bad Request")
    }
})

// get one exam

router.get('/get-one-exam/:exam_id',async (req,res)=>{
    let exam_id=req.params['exam_id']
    try{
        const exam=await Exam.findOne({exam_id:exam_id})
            /*.then(doc=>{
                doc.map((exam)=>{
                   console.log("Positive m,arks")
                    console.log(exam['marks_per_right_ans'])

                })
                res.status(200).json(doc)


            })*/.exec()
        if(exam){
            console.log("Getting exam detils")
            await res.status(200).json(exam)
        }

    }catch(e){
        console.log(e)
        await res.status(403).json("Bad request")
    }



})

module.exports=router