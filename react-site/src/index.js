import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CustomerRegistration from './components/CustomerComponents/Authentication/CustomerRegistration';
import Navbar from './components/adminComponents/Navbar/Navbar';
import Sidebar from './components/adminComponents/Sidebar/Sidebar';
import Dashboard from './components/adminComponents/Dashboard/Dashboard';
import Login from './components/adminComponents/Login/Login';
import Addcustomer from './components/adminComponents/AddCustomer/Addcustomer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from "react-router-dom";
import AddRider from './components/adminComponents/AddRider/AddRider';
import RiderList from './components/adminComponents/RiderList/RiderList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login/> */}

    <Router>
      {/* <Dashboard/> */}
      {/* <Login/> */}
      <Routes>

        <Route path='/customerRegistration' element={<CustomerRegistration />} />
        <Route path='/adminlogin' element={<Login />} />
        <Route path='/admindashboard' element={<Dashboard />} />


        <Route path='/addcustomer' element={<Addcustomer />} />
        <Route path='/addRider' element={<AddRider></AddRider>} />
        <Route path='/riderList' element={<RiderList></RiderList>} />
      </Routes>
    </Router>



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
