import React from 'react'
import Header from "../header/Header";
// eslint-disable-next-line
import Example from "../header/Example";
import AdminLoginModal from '../login/AdminLoginModal'
import UserLoginModal from "../login/UserLoginModal";
import AdminRegisterModal from "../register/AdminRegisterModal";
import UserRegisterModal from "../register/UserRegisterModal";
export default function HomePage(){
    return(
        <>

            <Header/>
            <AdminLoginModal />
            <UserLoginModal/>
            <AdminRegisterModal/>
            <UserRegisterModal/>
        </>
    )
}