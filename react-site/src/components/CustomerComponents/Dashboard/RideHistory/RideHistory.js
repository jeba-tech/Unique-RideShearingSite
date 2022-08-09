import React, {useState, useEffect} from "react";
import axios from "axios";
import CustomerNavbar from "../Navbar/CustomerNavbar";
import Footer from "../../../riderComponents/Footer/Footer";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RideHistory = () =>{

    let user = JSON.parse(localStorage.getItem('user'));
    var obj = {token: user.access_token};
    const [rides, setRides] = useState([]);
    useEffect(()=>{

        axios.post("http://127.0.0.1:8000/api/rideHistory",obj)
    .then(resp=>{
        var response = resp.data;
        console.log(response);
        setRides(response);
    }).catch(err=>{
        console.log(err);
    });
    },[]);
    let[rideId, setRideid] = useState("");
    const showCancel = (id)=>{
        console.log(id);
        var obj = {id: id};
        axios.post("http://127.0.0.1:8000/api/rideInformation",obj)
        .then(resp=>{
            var response = resp.data;
            console.log(response);
            document.getElementById('ridePick').innerHTML=response.pickupPoint;
            document.getElementById('ridedestination').innerHTML=response.destination;
            setRideid(id);


        }).catch(err=>{
            console.log(err);
        });
    }

    const Cancel = ()=>{

        var obj = {rideid: rideId};
        axios.post("http://127.0.0.1:8000/api/ride/cancel",obj)
        .then(resp=>{
            var response = resp.data;
            console.log(response);
            window.location.reload(false);

        }).catch(err=>{
            console.log(err);
        });

    }



    return(
        <div>

            <CustomerNavbar />
            <div className="container mt-3">
                <h2 className="d-flex justify-content-center"><u>Your Ride History</u></h2>



    <button type="button" id="export" className="btn btn-outline-success" >Download</button>

 <div className="table-responsive custom-table-responsive">


  <table className="table my-3 bg-light" id="myTable">
    <thead>
      <tr>
        <th>Ride ID</th>
        <th>Rider Name</th>
        <th>Rider Phone Number</th>
        <th>Pickup Point</th>
        <th>Destination</th>
        <th>Total Distance</th>
        <th>Bill</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>

{rides.map(ride=>(
     <tr key={ride.id}>

        <td>{ride.id}</td>
        <td>{ride.customerName}</td>
        <td>{ride.customerPhone}</td>
        <td>{ride.pickupPoint}</td>
        <td>{ride.destination}</td>
        <td>{ride.length} kilo</td>
        <td>{ride.cost} BDT</td>
        {
            ride.customerStatus === 'Waiting for rider...' && <td><span className="badge bg-warning text-dark me-2 cancel-btn">Wait for rider</span></td>
        }
        {
            ride.customerStatus === 'Ride complete' && <td><span className="badge bg-success">Wait for rider</span></td>
        }
        {
            ride.customerStatus === 'Cancel' && <td><span className="badge bg-danger">Ride Cancel</span></td>
        }
        {
            ride.customerStatus === 'Approve' && <td><span className="badge bg-info text-dark">Rider Approve</span></td>
        }
        {
            ride.customerStatus === 'ongoing' && <td><span className="badge bg-primary">Ride Ongoing</span></td>
        }

        <td>
            {
                ride.customerStatus === 'Waiting for rider...' &&<button className="btn btn-danger text-white" onClick={(e)=>showCancel(ride.id)} data-bs-toggle="modal" data-bs-target="#cancelModal"><i className="bi bi-x-circle-fill"></i> Cancel Ride</button>
            }
            {
                ride.customerStatus === 'Ride complete' &&<a href="javascript:void(0)" className="btn btn-primary"  id="viewRide" data-url="{{ route('rideView', $ride->id) }}"><i className="bi bi-eye me-2 text-white"></i>View Details</a>
            }
            {
                ride.customerStatus === 'Cancel' &&<p className="text-danger"> Ride Cancel at <strong>{ride.cancelTime}</strong></p>
            }
            {
               ride.customerStatus === 'Approve' && <a href="/chat/{{$ride->id}}" className = "btn btn-info "><i className="bi bi-chat-dots me-1 text-dark"></i>Chat</a>
            }
             {
               ride.customerStatus === 'Approve' && <a className="btn btn-danger text-white" id="cancel-ride" href="javascript:void(0)" data-url="{{ route('rideView', $ride->id) }}"><i className="bi bi-x-circle-fill"></i> Cancel Ride</a>
            }
        </td>


    </tr>
    ))}

    </tbody>

  </table>


  </div>

</div>
            <Footer />
<div className="modal fade" id="cancelModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title text-danger">Ride Cancel</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
            <form>
            <input type="hidden" id="ride-id" name="rideid" value={rideId} onChange={(e)=>setRideid(e.target.value)}/>
        <span className="text-dark">Are you sure to cancel your ride From </span><span className="text-dark" id="ridePick"></span><span className="text-dark"> To </span><span className="text-dark" id="ridedestination"></span>
        </form>
      </div>
      <div className="modal-footer">
      <button type="submit" className="btn btn-danger" id="yes" onClick={Cancel}>Delete</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancel</button>

      </div>
    </div>
  </div>
</div>

        </div>

    )
}
export default RideHistory;
