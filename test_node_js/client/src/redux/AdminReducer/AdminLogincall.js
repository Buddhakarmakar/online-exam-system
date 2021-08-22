import {
    loginAdminSuccess,
    isLoading,
    loginAdminFail} from './AdminReducerSlice'
import {useDispatch} from "react-redux";
import axios from 'axios'

 const AdminLoginCall=async(userData)=>{
    const dispatch = useDispatch()

        try{
            dispatch(isLoading())
           const res= await axios.post("api/user/login",userData)
                .then(res =>console.log(res))
            dispatch(loginAdminSuccess(res))

        }
        catch(e) {
            dispatch(loginAdminFail(e))

        }
}
export default AdminLoginCall