import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./NavBar.css";



const  NavBar = ()=>{
return(
<div>
<nav className="navbar navbar-expand-md bg-light navbar-light sticky-top shadow-sm">
<div className="container">
<Link to="#" className="navbar-brand"><span className="text-danger  h4">Your</span><span className="text-dark logo h4" >Ride</span></Link>

        <img  src={process.env.PUBLIC_URL+"index.png"} alt="profile pic"  width="40" height="40" className="rounded-circle" />

</div>
</nav>
</div>
    )
}
export default NavBar;