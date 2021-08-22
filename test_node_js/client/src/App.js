import React from 'react'
import {BrowserRouter as Router,
        Switch,
        Route} from "react-router-dom"

import AdminLogIn from './component/login/AdminLogIn'
// eslint-disable-next-line
import AdminRegister from "./component/register/AdminRegister";

import HomePage from "./component/home/HomePage";
// eslint-disable-next-line
//import {Counter} from "./redux/redux_reducer/counter";
import  store from './redux/store/store'
import { Provider } from 'react-redux';
import Question from "./pagination/question";
function App() {
  return (
      <Provider store={store}>
        <div className="App">
            <Router>
               <Switch>
                   <Route exact path="/">
                       <>
                           <Question />
                       </>
                   </Route>
                   <Route path="/login">
                       <AdminLogIn/>
                   </Route>
                   <Route path="/register">
                       <AdminRegister/>
                   </Route>
                   <Route path ="/home">
                       <HomePage/>
                   </Route>
               </Switch>

            </Router>
        </div>
      </Provider>
  );
}

export default App;
