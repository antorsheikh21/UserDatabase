import React,{useContext} from 'react';
import {NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import SubNavbar from './SubNavbar'
import {userContext} from '../App'

const link={
 
  color: "black",
  fontWeight:700
}


const Navbar = () => {
  const {state,dispatch} = useContext(userContext);

const RenderMenu=()=>{
  if(state){
    return (<>

          <SubNavbar/>
 
      <li className="nav-item">
        <NavLink activeStyle={link} className="nav-link  " to="/logout">Logout</NavLink>
      </li>
    
    </>
    )

  }else{
    return(
      <>
               <SubNavbar/>
      <li className="nav-item">
        <NavLink activeStyle={link} className="nav-link  " to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeStyle={link} className="nav-link  " to="/singup">Register</NavLink>
      </li>
 
      
      </>
    )
    
  }

}



    return (
        <>
        <div className="conatainer-fulid "  id="navbar" >
            <div className="col-md-11 mx-auto"> 
        <nav className="navbar navbar-expand-lg ">
  <NavLink className="navbar-brand logoTop" to="/">
   <i class="fab fa-gg-circle"></i> 
  {/* <i class="fas fa-dot-circle"></i> */}
An<span className="text-primary">tor</span>
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">

      <RenderMenu/>

    </ul>
 
  </div>
</nav>
</div>
        </div>    
        </>
    );
}

export default Navbar;
