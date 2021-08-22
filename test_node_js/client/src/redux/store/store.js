
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../redux_reducer/CounterSlice'
import AdminReducer from '../AdminReducer/AdminReducerSlice'
export default configureStore({
    reducer: {
        counter: counterReducer,
        admin_reducer:AdminReducer
    },
});
