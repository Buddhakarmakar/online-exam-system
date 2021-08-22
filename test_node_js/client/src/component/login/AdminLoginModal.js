import React, {useRef,useState} from 'react'


import{RiAdminFill}  from "react-icons/ri"
import {FaUnlockAlt} from 'react-icons/fa'
import {ImSpinner7} from 'react-icons/im'

import {
    loginAdminSuccess,
    isLoading,
    loginAdminFail, isLoadingStat, LoginError,IsUserLoggedIN
} from '../../redux/AdminReducer/AdminReducerSlice'
import {useDispatch,useSelector,} from "react-redux";
import axios from 'axios'



export default   function AdminLoginModal(){
    const dispatch = useDispatch()
    const isLoadingg=useSelector(isLoadingStat)
    const myLoginError=useSelector(LoginError)
    const IsUser=useSelector(IsUserLoggedIN)
    const  email=useRef();
    const password=useRef();
    const [ShowModal, setShowModal]=useState(true);

    const handleSubmit=(e)=>{
        e.preventDefault()
     //   console.log(email.current.value)
     //   console.log(password.current.value)
        const userData={
            email:email.current.value,
            password:password.current.value
        }

        try{
            dispatch(isLoading())
             axios.post("api/user/login",userData)
                .then(res => {
                        console.log(res.data);
                        dispatch(loginAdminSuccess(res.data));
                    setShowModal(false)
                    }
                ).catch(e=>{
                    console.log(e)
              dispatch(loginAdminFail())
                 email.current.value=''
                 password.current.value=''


            })


        }catch(e) {

            console.log(e)

        }


    }

    return(

        !IsUser ?(
                <div className="modal fade" id="AdminLoginModal" tabIndex="-1"
                     role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="false">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle"> Log In as Admin</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {myLoginError ? (
                                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                    <strong>Wrong Email or Password</strong>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                ) : null}
                                <div className="col-sm-3">
                                    <h2>Admin</h2>
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

                                    {isLoadingg?(
                                    <button
                                        className="btn btn-outline-danger  myButton  "
                                        type="disabled"
                                            >
                                        <ImSpinner7/>
                                        Processing
                                        </button>):(

                                            <button
                                                className="btn btn-outline-success myButton  "
                                                type="submit"
                                                data-dismiss={!ShowModal?(
                                                    "modal"
                                                ):null}
                                               >
                                                Log In
                                            </button>
                                        )}
                                </form>


                            </div>



                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-outline-primary " data-toggle="modal"  data-dismiss="modal"
                                        data-target="#AdminRegisterModal">
                                    Register
                                </button>
                            </div>




                        </div>
                    </div>
                </div>

     ):(
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <strong >You are now  logged in</strong>
                            <button type="button" className="close btn btn-outline-danger" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        )

    )
}