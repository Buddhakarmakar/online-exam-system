import React, {useEffect, useState} from 'react'
import {useSelector,useDispatch} from "react-redux";
import {current_exam_id_admin, CurrentExamId, UserData} from "../../redux/AdminReducer/AdminReducerSlice";
import axios from 'axios'
import "./AdminBody.css"
import AddExamModal from "../exam/AddExamModal";
import EditExamModal from "../exam/EditExamModal";



export default function AdminBody(){

    const  dispatch=useDispatch()
    const admin_current_exam_id=useSelector(current_exam_id_admin)


    const user_data=useSelector(UserData)
    const [initialState,setInitialState]=useState({
        user_exam:null,

    })


    const get_date=(date)=>{
        const d=new Date(date.toString())
        const day=d.getDate()

        const month=d.getMonth()+1
        const year=d.getFullYear()
        return (
            day +"/" + month +"/" + year
        )

    }
    const email=user_data.email
    console.log(email)
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

    const get_exam_id=(e)=> {
        return e


       // setCurrentExamId(e)
    }

    const user_exam_div=(user_exam)=>{
        if(user_exam){
            return (

                user_exam.map((data)=>
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

    const { user_exam}=initialState
    return (
        <div className="container-fluid">

            <h2 className="ml-8">Welcome {user_data.name}</h2>

                <div className="container">
                    <div className="row">
                        <div className="width-200  " >
                            <h2 className="text-center text-secondary my-font">
                                <button className="no-bg-button" data-toggle="modal" data-target="#AddExamModal">
                                    +
                                    <br/>Add Exam
                                </button>
                            </h2>



                        </div>
        <ul className="list-group list-group-flush" >
                        {user_exam_div(user_exam)}
            </ul>

                    </div>
                </div>


            <AddExamModal/>
            <EditExamModal/>

        </div>
    )

}