import React from 'react'

import './question.css'
const Paginate=({quesPerPage,totalQues,paginate})=>{
    const pageNumber=[]
    for(let i=1;i<=Math.ceil(totalQues/quesPerPage);i++){
        pageNumber.push(i)
    }
    return(
        <div>
            <div id="row">
                <ul >
                    {pageNumber.map(number=>(
                        <li key={number} id="btn" className="btn btn-outline-secondary abc ">
                            <a  onClick={()=>paginate(number)} className="btn " >
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Paginate