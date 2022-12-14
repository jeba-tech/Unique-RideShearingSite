import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./RiderHis.css";
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';

const RiderHis = ()=>{
    const [posts, setPosts] = useState([]);
    let user = JSON.parse(localStorage.getItem('user'));
    var userid = {token: user.access_token};

    useEffect(()=>{
        axios.post("http://127.0.0.1:8000/api/rideHistory",userid)
        .then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);
    return(


<div>
<NavBar/>
    <div className="container-fluid mt-5">
	  <div className="row">
    <div className="col-lg-2">
    <SideBar/>
    </div>
    <div className="col-lg-10">
		<div className="jumbotron">
        <div className ="bgt">
 <br /> <br /> <br />
<h2 className="d-flex justify-content-center text-dark">Your Ride History</h2>
<br />
<div className="table-responsive custom-table-responsive">
<table className="table custom-table">
<thead>
<tr>
  <th scope="col">
    <label className="control control--checkbox">
      <div className="control__indicator"></div>
    </label>
  </th>
  <th scope="col">Customer Name</th>
  <th scope="col">Pickup Point</th>
  <th scope="col">Destination</th>
  <th scope="col">Distance</th>
  <th scope="col">Cost</th>
  <th scope="col">Pickup Time</th>
  <th scope="col">Arrival Time</th>
</tr>
</thead>
<tbody>

  {posts.map(post=>(
                   <tr key={post.id} scope="row">
                       <th scope="row">
    <label className="control control--checkbox">
      <div className="control__indicator"></div>
    </label>
  </th>
                    <td className="text-primary">{post.customerName}</td>
                    <td >{post.pickupPoint}</td>
                    <td >{post.destination}</td>
                    <td >{post.length}</td>
                    <td >{post.cost}</td>
                    <td >{post.riderStartingTie}</td>
                    <td >{post.reachedTime}</td>
                </tr>
                    ))}
</tbody>
</table>
<br /> <br /> <br /><br /> <br />
</div>
</div>
</div>
		</div>
	  </div>
    </div>
    <Footer/>
</div>
    )
}
export default RiderHis;
