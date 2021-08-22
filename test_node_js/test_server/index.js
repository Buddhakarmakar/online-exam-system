//import redux from "redux"
const redux=require('redux')


//import {FETCH_USER,FETCH_USER_SUCCESS, FETCH_USER_FAIL} from "./type"



const applyMidWare=require('redux-thunk').default
const axios=require('axios')

const createMidWare=redux.applyMiddleware

const createStore=redux.createStore

const initialState={
    loading:false,
    users:[],
    error:''
}

 const FETCH_USER="FETCH_USER"
const FETCH_USER_SUCCESS="FETCH_USER_SUCCESS"
 const FETCH_USER_FAIL="FETCH_USER_FAIL"




const fetch_user=()=>{
    return{
        type:FETCH_USER
    }
}
const fetch_user_success=(users)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}
const fetch_user_fail=(error)=>{
    return{
        type:FETCH_USER_FAIL,
        payload:error
    }
}


const reducer= (state=initialState,action)=>{
    switch(action.type){

        case FETCH_USER:
            return{
                ...state,

                loading:true

            }
        case FETCH_USER_SUCCESS:{
            return{
                ...state,
                loading:false,
                users:action.payload,
                error:''
            }
        }
        case FETCH_USER_FAIL:{
            return{
                ...state,
                loading:false,
                users:[],
                error:action.payload
            }
        }


    }
}


const fetchUser=()=>dispatch =>{
    dispatch(fetch_user())
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then( res=>{
            const users=res.data.map(user=>user.name)
            dispatch(fetch_user_success(users))
        })
        .catch(err=>{
            //  const error=err.
            dispatch(fetch_user_fail(err.message))

        })

}
const store=createStore(reducer,createMidWare(applyMidWare))

store.subscribe(()=>{console.log("Initial Sate: " ,store.getState())})

store.dispatch(fetchUser())

