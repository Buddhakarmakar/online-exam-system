import React from 'react'
import LoginRegisterNav from "./LoginRegisterNav";
import LoggedInUser from "./LoggedInUser";
import {IsUserLoggedIN} from "../../redux/AdminReducer/AdminReducerSlice";
import {useSelector} from "react-redux";


export default function IsLogin(){
    const IsUserLoggedIn = useSelector(IsUserLoggedIN);
    console.log(IsUserLoggedIn)
    return(
            IsUserLoggedIn?
                (<LoggedInUser />)
                :(<LoginRegisterNav />)
    )
}