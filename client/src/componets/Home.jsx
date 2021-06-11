import React,{useState,useEffect} from 'react';

const Home = () => {
const[userName,setUsername]=useState('');
const[show,setShow]=useState(false)

    const homeAuth=async()=>{
        try {
           const res= await fetch('/getdata',{
                 method:"GET",
                 headers:{
                     "Content-Type":"application/json"
                 }
             });

          const data =await res.json();
          setUsername(data.name)
          setShow(true)

        } catch (error) {
            console.log(error)
            
        }
    }




    useEffect(() => {
        homeAuth()
    }, []);


    return (
        <>
        <div className="container">
            <div className="row d-flex  justify-content-center align-items-center ">
                <div className="col-md-10 py-5 mt-5 mx-auto text-center  ">
                   
                    <h2 className='blueColor' > HEI <span className=' color text-uppercase'>{userName}  </span> WELLCOME TO  ME<span className='text-primary'>RN</span>    DEV<span className='text-success'>LOP</span>ER   HOME PAGE</h2>
                   <h3>{ show ? 'Happy to see youu back 😃':'We are the MERN Developer'}</h3>
                </div>
            </div>
        </div>
           
        </>
    );
}

export default Home;
