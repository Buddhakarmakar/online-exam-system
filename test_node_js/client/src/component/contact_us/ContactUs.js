import React from 'react'
import About from "../about/About";
export default function ContactUs(){
    return(

            <div className="container-fluid ">
                <div className="row">
                    <div className="col-sm-4 bg-dark text-white">
                        <h5 className="mt-4 mb-4">
                            What is Lorem Ipsum Lorem Ipsum is simply
                            dummy text of the printing and typesetting
                            industry Lorem Ipsum has been the industry's

                        </h5>
                    </div>
                    <div className="col-sm-4 bg-dark text-white">
                        <h5 className="mt-4 mb-4">
                            About</h5>
                        <About/>
                    </div>
                    <div className="col-sm-4 bg-dark text-white">
                        <h5 className="mt-4 mb-4">
                            What is Lorem Ipsum Lorem Ipsum is simply
                            dummy text of the printing and typesetting
                            industry Lorem Ipsum has been the industry's

                        </h5>
                    </div>
                </div>
            </div>

    )
}