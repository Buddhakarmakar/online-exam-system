import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {
    logout,
    UserData
} from '../../redux/AdminReducer/AdminReducerSlice';





export default function LoggedInUser(){

    const dispatch = useDispatch();

    const user=useSelector(UserData)

    return(
        <ul className="navbar-nav ml-8 justify-content-between">

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-warning" href="/" id="loginDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {user.name}
                </a>
                <div className="dropdown-menu bg-warning" aria-labelledby="loginDropdown">
                    <a className="dropdown-item " href="/">{user.email}</a>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item" href="/">Something else here</a>
                </div>
            </li>
            <li className="nav-item">

                    <button className="btn btn-outline-danger nav-btn  "
                            onClick={()=>

                                dispatch(logout())
                               }>Log Out</button>

            </li>
        </ul>
    )
}
