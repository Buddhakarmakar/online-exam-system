import React, {useRef} from 'react'
import {RiAdminFill} from "react-icons/ri";
import {FaUnlockAlt} from "react-icons/fa";
export default function UserLoginModal(){

    const  email=useRef();
    const password=useRef();

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('Hi Buddhadeb')
        console.log(email.current.value)
        console.log(password.current.value)
    }

    return(


        <div className="modal fade" id="UserLoginModal" tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header ">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Log In as User</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">


                        <div className="col-sm-3">
                            <h2 className="align-center">Student</h2>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <RiAdminFill/>
                            <input type="email"
                                   placeholder="Enter Your Email"
                                   ref={email}
                                   required
                            />
                            <br/>
                            <FaUnlockAlt/>
                            <input type="password"
                                   placeholder="Enter Your password"
                                   ref={password}
                                   required
                                   minLength="6"
                            />

                            <br/>
                            <button
                                className="btn btn-outline-success myButton  " type="submit">Log In</button>
                        </form>






                    </div>




                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-toggle="modal"
                               data-target="#UserRegisterModal" data-dismiss="modal">Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}