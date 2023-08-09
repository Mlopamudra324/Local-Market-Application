import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


export default function Home() {
    return (
        <div className='container'>
            <div className="homeWrapper">
                {/* <img src="https://cdn.pixabay.com/photo/2014/12/21/23/41/market-575842__340.png" className='logo' alt='' /> */}
                <h1 className='title'>LOCAL MARKET</h1>

                <Link to="/logIn"><button className='button'>LogIn</button></Link>


                <span className='new'>New user?</span>

                <Link to="/Register"><button className='button'>Register</button></Link>


            </div>
        </div >
    )
}
