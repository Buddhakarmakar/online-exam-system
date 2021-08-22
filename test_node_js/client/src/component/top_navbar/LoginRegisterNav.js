import React from 'react'

import { AiFillGithub } from "react-icons/ai";

export default function LoginRegisterNav(){

    return(
       <>
        <ul className="navbar-nav mr-8 justify-content-between">

            <li className="nav-item dropdown mr-4">
                <a className="nav-link dropdown-toggle text-danger" href="/" id="loginDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Log In
                </a>
                <div className="dropdown-menu bg-warning" aria-labelledby="loginDropdown">

                    <button type="button" className="btn btn-outline-danger nav-btn dropdown-item" data-toggle="modal"
                            data-target="#AdminLoginModal">
                        Log  In as Admin
                    </button>

                    <button type="button" className="btn btn-outline-danger nav-btn dropdown-item" data-toggle="modal"
                            data-target="#UserLoginModal">
                        Log In as Student
                    </button>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item" href="/">Something else here</a>
                </div>
            </li>
            <li className="nav-item dropdown mr-4">
                <a className="nav-link dropdown-toggle text-danger" href="/" id="loginDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Register
                </a>
                <div className="dropdown-menu bg-secondary" aria-labelledby="loginDropdown">

                    <button type="button" className="btn btn-outline-secondary nav-btn dropdown-item" data-toggle="modal"
                            data-target="#AdminRegisterModal">
                        Register as Admin
                    </button>

                    <button type="button" className="btn btn-outline-secondary nav-btn dropdown-item" data-toggle="modal"
                            data-target="#UserRegisterModal">
                        Register as Student
                    </button>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item" href="/">Something else here</a>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link mr-2" href="/">
                <AiFillGithub />
                </a>
            </li>
        </ul>
       </>
    )
}