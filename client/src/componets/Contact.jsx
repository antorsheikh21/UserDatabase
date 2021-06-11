import React,{useEffect,useState} from 'react'
import {useHistory} from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact3 = () => {
 

const [mainData,setMainData]=useState({
    email:"",
    phone:"",
    work:"",
    
});


const history=useHistory()
    let name,value
    const handaleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setMainData({...mainData,[name]:value})
    }

    const getBackendData= async()=>{
        try{
            const res=await fetch("/getdata",{
                method:"GET",
                headers:{
                    "Content-Type":"Application/json"
                },
                credentials:"include"
            });
            const fdata = await res.json();

            const{name,phone,email,work}=fdata;

            if(res.status !==200){
              throw new Error("Please login first")
            }else{
              
              setMainData({...mainData,name,phone,work,email})
            }
        }catch(err){
            history.push("/login")
            console.log(err)
        }
    }


    useEffect(()=>{
        getBackendData()
    },[])


    const messageSend=async(e)=>{

      const {name,email,phone,message}=mainData;
        e.preventDefault();
        const res=await fetch("/contact",{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify({name,email,phone,message })
        });
        const resData= await res.json();
        
        if(res.status===201){
            
            setMainData({...mainData,message:""})
            mainData.message="";
            toast.dark('Message send succesfully be😃',{position:'top-center'})
        }else{
            alert(resData.error)
        }
    }

    return (
        
        
        <>
      <div className="contactPart">
        <div className="row container">
          <div className="col-md-11 mx-auto">



            <div className="row contactTop pt-md-5 text-left">


              <div className="col-md-3 d-flex align-items-center justify-content-start mt-2 mx-md-2 py-md-1 px-md-5 border">
                <div className="conleft mr-3">
                  <i class="zmdi zmdi-smartphone-android contactIcon "></i>
                </div>
                <div className="conRight">
                  <p className='conSocial'>phone</p>
                  <p className='socialLink text-muted'> {mainData.phone}</p>

                </div>
              </div>

              <div className="col-md-3 d-flex align-items-center justify-content-start mt-2 mx-md-2 py-md-1 px-md-5 border">
                <div className="conleft mr-3">

                  <i class="zmdi zmdi-email contactIcon"></i>
                </div>
                <div className="conRight">
                  <p className='conSocial'>Email</p>
                  <p className='socialLink text-muted' >{mainData.email}</p>

                </div>
              </div>

              {/* <div className="form-group"> */}
              <div className="col-md-3 d-flex align-items-center justify-content-start  mt-2 mx-md-2 py-md-1 px-md-5 border">
                <div className="conleft mr-3">

                  <i class="zmdi zmdi-pin-drop contactIcon"></i>
                </div>
                <div className="conRight">
                  <p className='conSocial'>Address</p>
                  <p className='socialLink text-muted'>Sirajganj,Rajshahi</p>

                </div>
                {/* </div> */}
              </div>

            </div>
          </div>
        </div>


        {/* bottm part contact */}

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-9 mx-auto border GetTouchPart p-5">



              {/* start from */}



              <form method="POST">
                <h3>Get into Touch</h3>
                <div className="form-row">


                  <div className="form-group col-md-4">

                    <input type="text"   value={mainData.name} onChange={handaleInputs}  name="name"  className="form-control font-weight-bold" id="inputEmail4" placeholder="name" />
                  </div>

                  <div className="form-group col-md-4">

                    <input type="email"  value={mainData.email} onChange={handaleInputs} name="email"  className="form-control font-weight-bold" id="inputPassword4" placeholder="Email" />
                  </div>

                  <div className="form-group col-md-4">

                    <input type="number"  value={mainData.phone} onChange={handaleInputs}   name="phone"  className="form-control  font-weight-bold" id="inputPassword4" placeholder="phone" />
                  </div>

                </div>


                <div class="form-group">

                  <textarea  value={mainData.message}  onChange={handaleInputs}     name="message"  className='form-control text-primary'   id="textAria" placeholder="Message" ></textarea>
                </div>




                <button onClick={messageSend}  type="submit" className="btn btn-primary">Send Message </button>
              </form>





              {/* finisd */}
            </div>
          </div>


        </div>


      </div>

      <ToastContainer/>

    </>

    
    )
}

export default Contact3
