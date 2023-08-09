import React from 'react';
import { Link } from 'react-router-dom';
import { Person } from '@mui/icons-material';
import './DashboardV.css'
import Products from '../../../pages/vendor/products/Products';

export default function DashboardV() {
    return (
        <>
            <div className="navbarVendorContainer">
                <div className="navbarWrapper">
                    <div className="navbarLeft">
                        <h1 className="navbarTitle">
                            LOCAL MARKET
                        </h1>
                    </div>
                    <div className="navbarCenter">
                        <div className="navbarSearchContainer">
                            <input type="text" placeholder='Search..' />
                        </div>
                    </div>
                    <div className="navbarRight">
                        <div className="navbar2IconItem">
                            <Link to="/addProducts">
                                <button className="navbarButton">
                                    Add product
                                </button>
                            </Link>

                        </div>
                        <div className="navbar2IconItem">
                            <Person style={{ color: 'grey' }} />
                        </div>
                        <div className="menuItem">

                            <button className="navbarButton">LogOut</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="homeContainer">
                <div className="containerLeft">
                    <div className="sidebarMenu">
                        <h3 className='sidebarTitle'>Category</h3>
                        <ul className="sidebarList">
                            <Link to="/products" className='link'>
                                <li className="sidebarListItem">products</li>
                            </Link>
                            <Link to="/vendors" className='link'>
                                <li className="sidebarListItem">vendors</li>
                            </Link>


                        </ul>
                    </div>
                </div>

            </div> */}
            <Products />
        </>
    )
}
