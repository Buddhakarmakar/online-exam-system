import React from "react"
import './AdminRegister.css'

const {useRef} = require("react");
export default function AdminRegister() {
    /*  constructor(props) {
          super(props);
          // Don't call this.setState() here!
          this.state = { counter: 0 };
          this.handleClick = this.handleClick.bind(this);
      }
  */
    const  email=useRef();
    const password=useRef();
    const  fname=useRef();
    const lname=useRef();
  //  const confirm_password=useRef();

    const handleSubmit=(e)=>{
        e.preventDefault()
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
                        <input type="text"
                               placeholder="Enter Your First Name"
                               ref={fname}
                               required
                        />
                        <input type="text"
                               placeholder="Enter Your Last name"
                               ref={lname}
                               required
                        />
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

                        <button className="submit_button" type="submit">Register </button>
                    </form>
                </div>
            </div>


        </>
    )

}
