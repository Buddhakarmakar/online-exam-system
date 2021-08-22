import {createSlice} from "@reduxjs/toolkit"

export const slice = createSlice({
    name: 'admin_reducer',
    initialState: {
        IsLoggedIn:false,
        isLoading:false,
        UserData:null,
        error:false,
        current_exam_id:null


    },
    reducers: {
        isLoading:state=>{
          state.isLoading=true
          state.UserData=null
          state.error=false
        },
        loginAdminSuccess: (state,action) => {
            state.IsLoggedIn = true;
            state.isLoading=false
            state.UserData=action.payload
            state.error=false
        },
        logout: state => {
            state.IsLoggedIn = false;
            state.UserData=null


        },
        loginAdminFail: (state) => {
            state.IsLoggedIn = false;
            state.isLoading=false
            state.UserData=null
            state.error=true
        },
        CurrentExamId:(state,action)=>{
            state.current_exam_id=action.payload
        }
    },
});
export const {loginAdminSuccess,isLoading,logout,loginAdminFail,CurrentExamId}=slice.actions
export const IsUserLoggedIN=state=>state.admin_reducer.IsLoggedIn;
export const isLoadingStat=state=>state.admin_reducer.isLoading;
export const  LoginError=state=>state.admin_reducer.error;
export const  UserData=state=>state.admin_reducer.UserData;
export const current_exam_id_admin=state=>state.admin_reducer.current_exam_id;
export default slice.reducer