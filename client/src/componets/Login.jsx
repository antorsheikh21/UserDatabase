import React,{useState,useContext} from 'react';
import {NavLink,useHistory} from 'react-router-dom'
import signpic from  '../images/log3.png'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import{userContext} from "../App"


const Login = () => {

    const {state,dispatch} = useContext(userContext);

const history=useHistory()
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')


const userLogin=async(e)=>{

e.preventDefault()

    if(!email || !password){
        return toast.dark("You should fillup evry field 😃",{ position:'top-center'})
    }
    

    
    const res = await  fetch('/signin',{
        method:'POST',
     headers:{
         "Content-Type":"application/json"
     },
     body:JSON.stringify({

        email,
        password
     })
    });


    const data= await res.json();


    if(res.status === 400 || !data){
    // window.alert('Invalid Credentials')
    toast.dark("Invalid Crediantials 😢",{position:'top-center'})
    }else{
        // window.alert("Login successfull!")

        dispatch({type:"USER",payload:true})
        toast.dark("Login successfull!! 😃",{position:'top-center'})
        history.push("/")
    }


//     console.log(res.status)

 }

    return (
        <>
                      <section className='signup'>
               <div className="container">
        

        <div className="singup-content  mt-md-5">

                    <div className="row">
                        <div className="col-md-10 mx-auto col-12">

                    

            <div className="login-form row border loginBorder   d-flex  justify-content-center  align-items-center  py-3 mt-5 ">
               
               
                <h2 className='form-title text-center py-3 '>Login</h2>

              
                <div className="signupimage  order-md-0 order-1  text-center  col-md-6   ml-auto">
                        <figure>
                            <img className='img-fluid' src={signpic} alt="signup images" />
                        </figure>
                        <NavLink    to='/singup'> <b> Sing-Up!</b></NavLink>
                    </div>

                <form    method='POST'  className="register-form my-2  order-md-1 order-0   col-md-6  mr-auto " id="register-form">
 

                     <div className="form-group " >
                         <label htmlFor="email">
                         <i class="zmdi zmdi-email meterial-icons-name"></i>
                         </label>
                         <input value={email} onChange={(e)=> setEmail(e.target.value) } className='inputStyle' type="email" name='email' id="email" autoCapitalize="off" placeholder="Your Email"/>
                     </div>


                     <div className="form-group">
                         <label htmlFor="password">
                         <i class="zmdi zmdi-lock meterial-icons-name"></i>
                         </label>
                         <input value={password} onChange={(e)=> setPassword(e.target.value)} className="inputStyle" type="password" name='password' id="password" autoCapitalize="off" placeholder="Your Password"/>
                     </div>


                     <div className="form-group form-btn">
                      
                         <input  onClick={userLogin}  type="submit" name='signup' id='login' className=' btn-inline-block btn btn-success px-4 form-submit' value='Login'/>
                     </div>

                </form>

 
            </div>

            </div>
                    </div>

        </div>
               </div>
           </section>


           <ToastContainer />
        </>
    );
}

export default Login;
