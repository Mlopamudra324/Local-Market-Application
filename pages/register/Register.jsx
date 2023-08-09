import React, { useState, } from 'react';
import './Register.css';
import axios from 'axios';


export default function Register() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [mobileNumber, setMobileNumber] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [address, setAddress] = useState(null);
    const [userType, setUserType] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "name") {
            setName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "mobileNumber") {
            setMobileNumber(value);
        }

        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }
        if (id === "address") {
            setAddress(value);
        }
        if (id === "userType") {
            setUserType(value);
        }
        console.log(name, email, mobileNumber, password, confirmPassword, address, userType)
    }

    const handleSubmit = (e) => {
        axios.post('http://127.0.0.1:8000/signup', {
            "name": name,
            "email": email,
            "mobile_number": mobileNumber,
            "user_type": userType,
            "password": password,
            "address": address,
        })
            .then(function (response) {
                console.log(response);
                alert('register succesfully');
            })

            .catch(function (error) {
                console.log(error);
            });
        console.log(name, email, mobileNumber, password, confirmPassword, address, userType);
        e.preventDefault();
    }
    return (
        <div className='registerContainer'>
            <div className="registerWrapper">
                <h1 className="title">LOCAL  MARKET</h1>

                <form className="registerForm" >
                    <div className="registerItem">
                        <label> Name</label>
                        <input type="text" id='name' onChange={handleInputChange} placeholder='Enter Your Name' />
                    </div>
                    <div className="registerItem">
                        <label > Email</label>
                        <input type="email" id='email' onChange={handleInputChange} placeholder='Enter Your Email' />
                    </div>
                    <div className="registerItem">
                        <label > Mobile Number</label>
                        <input type="number" id='mobileNumber' onChange={handleInputChange}
                            pattern="[0-9]*" maxLength="10" placeholder='+91 **********' />
                    </div>
                    <div className="registerItem">
                        <label> Password</label>
                        <input type="password" id='password' onChange={handleInputChange} placeholder='Enter Your Password' />
                    </div>
                    <div className="registerItem">
                        <label  > Confirm Password</label>
                        <input type="password" id='confirmPassword' onChange={handleInputChange} placeholder="Confirm Password" />
                    </div>
                    <div className="registerItem">
                        <label  > Address</label>
                        <input type="Address" id='address' onChange={handleInputChange} placeholder="Address" />
                    </div>
                    <div className="registerItem">
                        <label>
                            <input type="radio" value='user' id='userType' checked={userType === 'user'} onChange={handleInputChange} />
                            user
                        </label>
                        <label>
                            <input type="radio" value='vendor' id='userType' checked={userType === 'vendor'} onChange={handleInputChange} />
                            vendor
                        </label>
                    </div>
                    <button className="registerButton" onClick={handleSubmit} type='submit'>Register</button>
                </form>
            </div>
        </div>
    )
}
