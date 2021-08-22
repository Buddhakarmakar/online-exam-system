import React from 'react'
import './Header.css'
import HeaderBody from "./HeaderBody";
import About from "../about/About";
import ContactUs from "../contact_us/ContactUs";
import TopNavbar from "../top_navbar/TopNavbar";
import {useSelector} from "react-redux";
import {IsUserLoggedIN} from "../../redux/AdminReducer/AdminReducerSlice";
import AdminBody from "../admin_body/AdminBody";
export default function Header(){
    const UserLogin=useSelector(IsUserLoggedIN)
    return(

        <div>

           <TopNavbar/>

            { !UserLogin?(
                <HeaderBody/>):
            (
                <AdminBody/>
            )
            }
           <About/>
           <ContactUs/>
        </div>

    )
}