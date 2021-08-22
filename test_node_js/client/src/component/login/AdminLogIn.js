import React from "react"
import './LogIn.css'

const {useRef} = require("react");
export default function AdminLogIn() {
  /*  constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }
*/
    const  email=useRef();
    const password=useRef();

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('Hi Buddhadeb')
        console.log(email.current.value)
        console.log(password.current.value)
    }

        return(
            <>
                <div className="container">
                    <div className="logo">
                        Logo
                    </div>
                    <div className="login_form">
                        <form onSubmit={handleSubmit}>
                                <input type="email"
                                       placeholder="Enter Your Email"
                                       ref={email}
                                       required
                                />
                                <br/>
                            <input type="password"
                                   placeholder="Enter Your password"
                                   ref={password}
                                   required
                                   minLength="6"
                            />

                            <br/>
                            <button className="submit_button" type="submit">Log In</button>
                        </form>
                    </div>
                </div>


            </>
        )

}
