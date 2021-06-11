import React,{useState} from 'react';

import {NavLink ,useHistory} from 'react-router-dom'
import signpic from  '../images/signup.svg'
 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Singup = () => {

 
    const history=useHistory()

    const[user,setUser]=useState({
        name:"",email:"",phone:"",work:"",password:"", cpassword:""
    })

  
 
const handleInputs =(e)=>{
     const{name,value}=e.target;
     setUser({...user,[name]:value})
       
}

const postData=async(e)=>{
 
    e.preventDefault()

    const{ name,email,phone,work,password, cpassword}=user;

  const res=await  fetch("/register",{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
     
      body:JSON.stringify({
          name,email,phone,work,password,cpassword

      })
  })

  const data=await res.json();
 
  if(!name || !email || !phone  || !work   || !password   || !cpassword   ){
               
//   return   window.alert('You should evry fillup every feild !')
   return  toast.dark(`You should  fillup every feild ! `,{position:'top-center'})
    
 }

  if(password !==cpassword){
    //   return window.alert('the password are not same !')
      return toast.error("the password are not same !")
  }


  if(data.status === 422 || !data){
    // window.alert('INviled Registation')
     toast.dark("INviled Registation !")
   

  }else{
    // window.alert(' Registation Succesfull')
    toast.success("Registation Succesfull !")
    console.log(' Registation Succesfull')

    history.push("/login");
  }

}


//  video puse 14 mintes
    return (
        <>
           <section className='signup'>
               <div className="container">
        

        <div className="singup-content">

        <div className="row">
                 <div className="col-md-10 mx-auto col-12">

            <div className="singup-form row  border singUpBorder d-flex justify-content-center align-items-center py-3  mt-4 ">
               
            <h2 className='form-title text-center py-3 '>Sign up</h2>
              
                <form method="POST"   className="register-form my-2  order-md-0 order-1  col-md-6  ml-auto " id="register-form">
                     

                     <div className="form-group">
                         <label htmlFor="name">
                         <i class="zmdi zmdi-account  meterial-icons-name"></i>
                         </label>
                         <input  value={user.name} onChange={handleInputs}
                          className="inputStyle"  type="text" name='name' id="name" autoCapitalize="off" placeholder="Your Name"/>
                     </div>


                     <div className="form-group " >
                         <label htmlFor="email">
                         <i class="zmdi zmdi-email meterial-icons-name"></i>
                         </label>
                         <input value={user.email}  onChange={handleInputs}  className='inputStyle' type="email" name='email' id="email" autoCapitalize="off" placeholder="Your Email"/>
                     </div>


                     <div className="form-group">
                         <label htmlFor="phone">
                         <i class="zmdi zmdi-phone-in-talk  meterial-icons-name"></i>
                         </label>
                         <input  value={user.phone} onChange={handleInputs} className="inputStyle" type="number" name='phone' id="phone" autoCapitalize="off" placeholder="Your phone"/>
                     </div>

                     <div className="form-group">
                         <label htmlFor="work">
                         <i class="zmdi zmdi-slideshow  meterial-icons-name"></i>
                         </label>
                         <input value={user.work} onChange={handleInputs}  className="inputStyle" type="text" name='work' id="work" autoCapitalize="off" placeholder="Your Proffesion"/>
                     </div>

                     <div className="form-group">
                         <label htmlFor="password">
                         <i class="zmdi zmdi-lock meterial-icons-name"></i>
                         </label>
                         <input  value={user.password} onChange={handleInputs} className="inputStyle" type="password" name='password' id="password" autoCapitalize="off" placeholder="Your Password"/>
                     </div>


                     <div className="form-group">
                         <label htmlFor="password">
                         <i class="zmdi zmdi-lock meterial-icons-name"></i>
                         </label>
                         <input   value={user.cpassword}  onChange={handleInputs} className="inputStyle" type="password" name='cpassword' id="cpassword" autoCapitalize="off" placeholder="Confirm Your Password"/>
                     </div>

 
                     <div className="form-group form-btn">
                         <input  onClick={postData}  type="submit" name='signup' id='signup' className=' btn btn-success form-submit' value='Register'/>
                     </div>

                </form>

                    <div className="signupimage  order-md-1 order-0  text-center  col-md-4 mr-auto">
                        <figure>
                            <img className='img-fluid' src={signpic} alt="signup images" />
                        </figure>
                        <NavLink    to='/login'> <b>Already I am Register ! </b> </NavLink>
                    </div>

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

export default Singup;
