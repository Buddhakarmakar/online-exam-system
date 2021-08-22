import React from 'react'
import './question.css'
import {useState} from "react";


const QuestionAnswer=({question,options,selected,qid})=>{
    const [answer, setAnswer] = useState(options);
    return(
        <div>
            <li className="list-group-item"><h2>{question}</h2></li>
            {answer.map((text,index)=>(
                <div className="opt_btn">
                    <li  className="list-group-item">

                        <button className="btn btn-outline-primary  ">
                        <a className="list-item form-control"> <input type="radio"

                                        onClick={()=>{
                                            selected(text,qid)
                                        }}
                                        name={qid}/>
                                    <span className="badge badge-light">({String.fromCharCode(index+65)})</span>
                            {text}
                        </a>
                        </button>


                    </li>
                </div>
            ))}

       </div>
    )
}
export default QuestionAnswer