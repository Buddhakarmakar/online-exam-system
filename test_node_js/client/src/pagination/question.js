import axios from 'axios'
import './question.css'
import React, {useState,useEffect} from 'react'
import Paginate from "./Paginate";
import PrevNext from "./PrevNext";
import QuestionAnswer from "./QuestionAnswer";
const len=1;
const Qusetion=()=>{
    const [question,setQuestion]=useState([])
    const [loading,setLoading]=useState(false)
    const [currentPage,setCurrentPage]=useState(1)
    const [quesPerPage,setQuesPerPage]=useState(1)

    const indexOfLastQues=currentPage *quesPerPage
    const indexOfFirstQues=indexOfLastQues-quesPerPage
    const currentQues=question.slice(indexOfFirstQues,indexOfLastQues)

    const [ans,setAns]=useState([])
    const [res,setRes]=useState([])
    const[score,setScore]=useState(0)
    const [marks_per_right_ans,setMakrsPerRightAns]=useState(0)
    const [marks_per_wrong_ans,setMakrsPerWrongAns]=useState(0)
    const[examTitle,setExamTitle]=useState('')
    const [examDuration,setExamDuration]=useState(0)
    useEffect(()=>{
        const getQuestion=async ()=>{
            setLoading(true)
            await axios.get("/api/admin/question/get-all-question/123")
                .then(res=>{
                    setQuestion(res.data)
                    setLoading(false)
                })
        }

        getQuestion()

    },[])
    useEffect(()=>{

        const getExamDetail=async ()=>{
            await axios.get('/api/admin/exam/get-one-exam/123')
                .then(res=>{
                    setMakrsPerRightAns(res.data.marks_per_right_ans)
                    setMakrsPerWrongAns(res.data.marks_per_wrong_ans)
                    setExamTitle(res.data.exam_title)
                    setExamDuration(res.data.exam_duration)

                })
        }
        getExamDetail()
        },[])
    const paginate=(number)=>{
        setCurrentPage(number)
    }
    const previous=()=>{
        if(currentPage>1){
        setCurrentPage(currentPage-1)}


    }
    const next=()=>{
        if(currentPage<question.length) {
            setCurrentPage(currentPage + 1)
        }
    }

const compute_ans=(a,r,crt_ans)=>{

        if(res.includes(r)){
             let i=res.indexOf(r)
            ans[i]=a;
            if(a===crt_ans){
                setScore(score)
            }
            else {
                setScore(score)
            }
        }else{
            setRes([...res ,r])
            setAns([...ans,a])
            if(a===crt_ans){
                setScore(score+marks_per_right_ans)
            }
            else {
                setScore(score-marks_per_wrong_ans)
            }
        }




}


    function formatTimeLeft(time) {
        // The largest round integer less than or equal to the result of time divided being by 60.
        const minutes = Math.floor(time / 60);

        // Seconds are the remainder of the time divided by 60 (modulus operator)
        let seconds = time % 60;

        // If the value of seconds is less than 10, then display seconds with a leading zero
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        // The output in MM:SS format
        return `${minutes}:${seconds}`;
    }


    return(
        <div className="container-fluid">
            <div className="row">

                    <h2 className="text-warning center">
                       Title :  {examTitle}
                    </h2>

            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-3">
                    Questions No:
                    <Paginate quesPerPage={quesPerPage}
                              totalQues={question.length}
                              paginate={paginate}/>
                              <br/>


                              <hr/>
                    <h5><strong>Positive Marks:</strong>
                        <span className="badge  badge-secondary">{marks_per_right_ans}</span>
                    </h5>
                    <hr/>
                    <h5><strong>Negative Marks:</strong>
                        <span className="badge  badge-danger">-{marks_per_wrong_ans}</span>
                    </h5>
                </div>
                <div className="col-sm-7">

                    <ul className="list-group">
                          {currentQues.map(({question_title,options,correct_ans,question_id})=>
                              <QuestionAnswer question={question_title}
                                              options={options}
                                              qid={question_id}
                                              selected={(ans,r)=>{{compute_ans(ans,r,correct_ans)}}}
                                              key={question_id}/>
                          )}

                    </ul>

                    <PrevNext previous={previous}
                              next={next}
                              currentPage={currentPage}
                              totalQues={question.length}/>
                </div>
                <div className="col-sm-2 ">
                    <h5>Time Left : <strong className="badge badge-primary">{formatTimeLeft(examDuration*60)} Minute</strong> </h5>
                    <h4 className="mr-4">{res.map(i=>(<h6>{i}</h6>))}</h4>
                    <hr/>
                    <h4 className="mr-4">{ans.map(i=>(<h6>{i}</h6>))}</h4>
                    <hr/>
                    <hr/>
                    <h4>Your score: </h4>
                    <h5>{score}</h5>
                </div>

            </div>

        </div>
    )
}


export default Qusetion