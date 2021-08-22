
import React from 'react'
import './question.css'
let prev=true
let ne=true
const PrevNext=({previous,next,currentPage,totalQues})=>{

    if(currentPage>1){
        prev=true
    }
    else{
        prev=false
    }
    if(currentPage<totalQues){
        ne=true
    }
    else{
        ne=false
    }
    return(

        <div className="prev_next ml-8 mr-8">
            <button className={prev?("btn btn-outline-primary w-25")
                                :"button disabled btn btn-outline-primary w-25"}
                    onClick={()=>previous()}
            >Previous</button>
            {ne?(
                <button className="btn btn-outline-primary  float-right w-25"
                        onClick={()=>next()}
                >Next</button>
            ):(
                <button className="btn btn-outline-success  float-right w-25"

                >Submit</button>
            )}




        </div>
    )
}
export default PrevNext