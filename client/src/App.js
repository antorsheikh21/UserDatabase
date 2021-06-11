 import React,{createContext,useReducer} from 'react'
 import {Route,Switch} from 'react-router-dom'
 import './App.css'
 import Navbar from './componets/Navbar'
 import Home from './componets/Home'
 import About from './componets/About'
 import Contact from './componets/Contact'
 import Login from './componets/Login'
 import Singup from './componets/Singup'
 import Er from './componets/Error'
 import Logout from './componets/Logout'

import {initialState,reducer} from './reducer/UserReduecer'



//createContext
export const userContext=createContext();
 const Routing=()=>{
   return(
    <Switch> 
    <Route exact  path='/' component={Home}/> 
    <Route exact path='/contact' component={Contact}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/singup' component={Singup}/>
    <Route exact path='/logout' component={Logout}/>
    <Route exact  component={Er}/>
    </Switch>
   )
 }
 export default function App() {
   const [state, dispatch] = useReducer(reducer, initialState)
   return (
     <>
      <userContext.Provider value={{state,dispatch}}> 

       <Navbar/>
      <Routing/>

      </userContext.Provider>
     </>
   )
 }
 
