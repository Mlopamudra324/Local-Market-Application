import React, { useState, setState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import Home from '../../components/home/Home';
import DashboardC from '../../components/customer/dashboard/DashboardC'
import DashboardV from '../../components/vendor/dashboard/DashboardV';

export default function LogIn(props) {
    const [emailId, setEmailId] = useState(null);
    const [password, setPassword] = useState(null);
    const [userRender, setUserRender] = useState(false);
    const [vendorRendor, setVendorRendor] = useState(false);


    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "emailId") {
            setEmailId(value);
        }
        if (id === "password") {
            setPassword(value);
        }
    }

    const handleSubmit = (e) => {
        axios.post('http://127.0.0.1:8000/signin', null, {
            params: {
                "email": emailId,
                "password": password
            }
        }).then(function (response) {
            console.log(response);
            if (response.data.success === true && response.data.message === "Verified user") {
                localStorage.setItem("token", response.data.data.token);
                localStorage.setItem("userId", response.data.data.id);
                localStorage.setItem("isVendor", response.data.data.is_vendor);
                if (response.data.data.is_vendor) {
                    setVendorRendor(true);
                } else {
                    setUserRender(true);
                }
            }
            alert(response.data.message);
        }).catch(function (error) {
            console.log(error);
        });
        e.preventDefault();
    }
    if (userRender) {
        // return <Home />
        return <Navigate to="/dashboardC" />
    }
    if (vendorRendor) {
        // return <Home />
        return <Navigate to="/DashboardV" />
    }

    return (
        <div className='loginContainer'>
            <div className="logInWrapper">
                <h1 className="title">LOCAL  SHOP</h1>

                <form className='logInForm' >
                    <div className="loginItem">
                        <label>EmailId</label>
                        <input type="text" id="emailId" onChange={handleInputChange} placeholder='emailId' />
                    </div>
                    <div className="loginItem">
                        <label>PassWord</label>
                        <input type="password" id="password" onChange={handleInputChange} placeholder='password' />
                    </div>

                    <button className="loginButton" onClick={handleSubmit} type='submit'>Log In</button>
                </form>
            </div>
            {/* if (userRender === true) {
                <Navigate to="/" />
            }
            if (vendorRendor === true) {
                <Navigate to="/" />
            } */}
        </div>
    )
}
