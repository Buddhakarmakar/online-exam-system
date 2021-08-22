import React from 'react'
import {useRef} from 'react'
export default function AddExamModal(){

    const exam_title=useRef()
    const exam_time=useRef()
    const exam_date=useRef()
    const exam_duration=useRef()
    const no_of_question=useRef()
    const marks_per_right_ans=useRef()
    const marks_per_wrong_ans=useRef()

    const handleSubmit=(e)=>{
        e.preventDefault();
       // console.log(exam_title.current.value)
    }
    return(
        <div className="modal fade" id="AddExamModal" tabIndex="-1"
             role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="false">
            <div className="modal-dialog " role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle"> Enter Exam Details</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">




                        <form onSubmit={handleSubmit}>
                            <label for="exam_title"><strong>Exam Title</strong></label>
                            <input type="text"
                                   placeholder="Enter Exam Title"
                                   name="exam_title"
                                   required
                                   ref={exam_title}
                            />
                            <br/>

                            <label htmlFor="exam_time">Exam Time</label>
                            <input type="time"
                                   placeholder="Enter Your Email"
                                   name="exam_time"
                                   required
                                   ref={exam_time}
                            />
                            <br/>
                            <label htmlFor="exam_date">Exam Date</label>
                            <input type="date"
                                   placeholder="Enter date"
                                   name="exam_date"
                                   required
                                   ref={exam_date}
                            />
                            <br/>



                            <label htmlFor="no_of_question"><strong>No Of Question</strong></label>
                            <input type="number"
                                   placeholder="Enter No Of question"
                                   name="no_of_question"
                                   required
                                   ref={no_of_question}
                            />
                            <br/>



                            <label htmlFor="marks_per_right_ans"><strong>Positive Mark </strong></label>
                            <input type="number"
                                   placeholder="Enter Marks"
                                   name="marks_per_right_ans"
                                   required
                                   ref={marks_per_right_ans}
                            />
                            <br/>



                            <label htmlFor="marks_per_wrong_ans"><strong>Negative Mark</strong></label>
                            <input type="number"
                                   placeholder="Enter Marks"
                                   name="marks_per_wrong_ans"
                                   required
                                   ref={marks_per_wrong_ans}
                            />
                            <br/>



                            <label htmlFor="exam_duration"><strong>Duration in Minute</strong></label>
                            <input type="number"
                                   placeholder="Exam Duration"
                                   name="exam_duration"
                                   required
                                   ref={exam_duration}
                            />


                        </form>


                    </div>



                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary btn-sm mr-4" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-outline-primary " >
                            Add Exam
                        </button>
                    </div>




                </div>
            </div>
        </div>

    )
}