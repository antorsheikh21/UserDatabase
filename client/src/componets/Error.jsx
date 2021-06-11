import React from 'react';
import { NavLink } from 'react-router-dom';
import Err from '../images/4.png'
const Error = () => {
    return (
        <>
 <section className='signup'>
               <div className="container">

                   <div className="row ">

                       <div className="col-md-10 mx-auto border text-center">


                                       
                                            <img className='img404 rounded'  src={Err} alt="" />
                                    

                         <NavLink to='/'> <button className='btn btn-primary rounded-circel'>Back to Home</button>  </NavLink>
                       </div>
                   </div>
        

   
               </div>
           </section>

            
        </>
    );
}

export default Error;
