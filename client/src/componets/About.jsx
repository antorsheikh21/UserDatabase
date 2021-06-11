import React,{useState,useEffect} from 'react';
 import Mypic from '../images/a2.jpg'
import {useHistory} from 'react-router-dom'
const About = () => {

    const history=useHistory()
 const [isActive,setisActive]=useState(true); //page rendering for tabe
 const [userData,setUserData]=useState({})
 
 
 const callAboutPage=async () => {
     try {
         const res=await fetch('/about',{
             method:"GET",
             headers:{
                Accept:"application/josn",
                "Content-Type":"application/json"
             },
             credentials:"include"
         });

         const data=await res.json()
      
         setUserData(data)

         if(!res.status===200){
             throw new Error(res.error)
         }
     } catch (error) {
         console.log(error);
         history.push('/login')
         
     }

 }

useEffect(() => {
  callAboutPage()
}, [ ]);

 
 

 

    return (
        <>

        <div className="row "> <div className="col-md-10 mx-auto">
            
           
    <div className="aboutBorder m-md-5 pt-md-5 pb-3 pt-3  container emp-profile">
        <form method="GET">
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-img">

                    <img className='img-fluid' src={Mypic} alt="Antor" />

                    </div>
                </div>

                <div className="col-md-6">
                     <div className="profile-head">
                         <h5> 😃 Wellcome Mr <span className='blueColor'>{userData.name} </span> </h5>
                         <h6>🗺️ {userData.work}</h6>
                         <p className='profile-rating- mt-3 mb-5'>  RANKING:<span>1/10</span></p>


                         <div className="nav nav-tabs" role='tablist'>
                             <li className='nav-items'>
                                  <a  onClick={()=> setisActive(true)}   className='nav-link active' id='home-tab' data-toggle='tab'  href="#about" role='tab'>About</a>  
       
                                 
                             </li>


                             <li className='nav-items'>
                                 <a  onClick={()=> setisActive(false)}   className='nav-link  ' id='profile-tab' data-toggle='tab'  href="#profile" role='tab'>Timeline</a>
                             </li>

                         </div>
                     </div>
                </div>

                <div className="col-md-2">
                    <input  disabled='true' type="submit" className=' text-muted  btn profile-edit-btn' name='btnAddMore' value="Edit Profile" />
                </div>

            </div>

                <div className="row">
                    {/* left side url  */}
                    <div className="col-md-4 leftUrl">
                        <p className='mt-md-3'>WORK LINK</p>
                        <a href="/" target='_antor'>Facebook</a> <br />
                        <a href="/" target='_antor'>YouTube</a> <br />
                        <a href="/" target='_antor'>Instagram</a> <br />
                        <a href="/" target='_antor'>Linkedin</a> <br />
                        <a href="/" target='_antor'>Web Developer</a> <br />
                        <a href="/" target='_antor'>FIgma</a> <br />
                        <a href="/" target='_antor'>Twitter</a> 

                    </div>
                    


                            
                    {/* right side data toggle */}

                    {  isActive  ? <div className="col-md-8 about-info  " id='partOne'   >

                           <div className="tab-content profile-tab" id='myTabContent'>
                            <div className="tab-pane  active      " id='about' role='tabpane' aria-labelledby='home-tab'>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className='font-weight-bold' > User Id</label>
                                    </div>
                                    <div className="col-md-6">
                                         <p className='text-primary'>{userData._id}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className='font-weight-bold' > Name</label>
                                    </div>
                                    <div className="col-md-6">
                                         <p className='text-primary'>{userData.name}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className='font-weight-bold' > Email</label>
                                    </div>
                                    <div className="col-md-6">
                                         <p className='text-primary'>{userData.email}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className='font-weight-bold' > Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                         <p className='text-primary' >{userData.phone}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label className='font-weight-bold' > Proffsion</label>
                                    </div>
                                    <div className="col-md-6">
                                         <p className='text-primary' > {userData.work}  </p>
                                    </div>
                                </div>


                            </div>
                            
                             </div>

                    </div>
 

        
                            
                    :        <div className="col-md-8 about-info   " id='partTwo'  >
                        <div className="tab-content profile-tab" id='myTabContent'>
                            <div className="tab-pane  fade  active   " id='profile' role='tabpanel' aria-labelledby='profile-tab'>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className='font-weight-bold' > EXPIRIENCE</label>
                                    </div>
                                    <div className="col-md-6">
                                         <p className='text-primary'>Expert</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className='font-weight-bold' > Hourly Rate</label>
                                    </div>
                                    <div className="col-md-6">
                                         <p className='text-primary'> 10$/hr </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className='font-weight-bold' > Total Projects</label>
                                    </div>
                                    <div className="col-md-6">
                                         <p className='text-primary'>30+</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className='font-weight-bold' > English Level</label>
                                    </div>
                                    <div className="col-md-6">
                                         <p className='text-primary' >Expert</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label className='font-weight-bold' > Availability</label>
                                    </div>
                                    <div className="col-md-6">
                                         <p className='text-primary' > 8 months</p>
                                    </div>
                                </div>


                            </div>
                            
                             </div>

                    </div> 

   
   }
 
             
              
                </div>





        </form>
    </div>
    </div></div>
        </>
    );
}

export default About;





 