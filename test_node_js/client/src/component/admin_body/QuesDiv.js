import {CurrentExamId} from "../../redux/AdminReducer/AdminReducerSlice";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";

export default function QuesDiv(props){

    console.log(props)
    const user_exam=props.val
    const dispatch=useDispatch()

    const get_date=(date)=>{
        const d=new Date(date.toString())
        const day=d.getDate()

        const month=d.getMonth()+1
        const year=d.getFullYear()
        return (
            day +"/" + month +"/" + year
        )

    }


    const get_exam =async (email)=>{
        await axios.post(
            "api/admin/exam/get-exam",{email:email},//{params:{admin_id:email}},


        ).then(res=>{
            console.log(res.data)
            setInitialState({
                user_exam:res.data,
                //current_exam_id:initialState.current_exam_id
            })
        })
            .catch(e=>console.log(e)


            )



    }
    useEffect(()=> {
            async function myfun(){
                await get_exam(email)
            }
            myfun()

        },[email]
    )

    if(user_exam.val){
        return (

            user_exam.val.map((data)=>
                <div className="card width-200" key={data._id}>

                    <div className="card-body">
                        <h5 className="card-title"><strong>Exam Title :</strong>{data.exam_title}</h5>

                    </div>

                    <li className="list-group-item">
                        <strong>
                            Duration :
                        </strong>{data.exam_duration +" "}
                        <span className="badge badge-secondary"> Min</span>
                    </li>
                    <li className="list-group-item">
                        <strong>
                            Exam Date :
                        </strong>
                        <span className="badge badge-light">
                                                {get_date(data.exam_date) +" "}
                                             </span>

                    </li>

                    <li className="list-group-item">

                        <strong>
                            Exam Time :
                        </strong>
                        <span className="badge badge-success">
                                                {data.exam_time +" "}
                                             </span>
                    </li>
                    <li className="list-group-item">

                        <strong>
                            Marks :
                        </strong>
                        <span className="badge badge-primary">
                                                { " + " + data.marks_per_right_ans }
                                             </span>
                    </li>
                    <li className="list-group-item">

                        <strong>
                            Negative  Marks :
                        </strong>
                        <span className="badge badge-danger">
                                                { " " + data.marks_per_wrong_ans }
                                             </span>
                    </li>
                    <li className="list-group-item">

                        <strong>
                            Total Question :
                        </strong>
                        <span className="badge badge-dark">
                                                { " " + data.no_of_question }
                                             </span>
                    </li>
                    <li className="list-group-item">
                        <div className="card-body" align="right">
                            <button className="btn btn-outline-primary ml-2 card-link"
                                    data-toggle="modal"
                                    data-target="#EditExamModal"
                                    id={data.exam_id}
                                    onClick={dispatch(CurrentExamId(data.exam_id))}
                            >Edit</button>
                            <button className="btn btn-outline-danger  card-link">Delete</button>
                        </div>
                    </li>

                </div>

            )
        )
    }
    else{
        return null
    }
}

