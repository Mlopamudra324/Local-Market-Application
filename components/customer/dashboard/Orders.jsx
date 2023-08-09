import { React, useState, } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './DashboardC.css';
import { Badge, Button } from '@mui/material';
import { ShoppingCartOutlined, Person } from '@mui/icons-material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddOrder from '../../../pages/customer/addOrder/AddOrder';
import { useEffect } from 'react';





export default function Orders() {
    const [rows, setRows] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/get_orders', {
            params: {
                user_id: localStorage.getItem("userId"),
            }, headers: {
                "token": localStorage.getItem("token")
            }
        })
            .then(function (response) {
                console.log(response);
                if (response.data.success === true) {
                    if (response.data.message === "Successfully fetched orders list") {
                        const orders = response.data.data;
                        const formatedDataList = [];
                        for (let i = 0; i < orders.length; i++) {
                            formatedDataList.push(createData(orders[i].order_id, orders[i].product_name, orders[i].image_url, orders[i].mobile_number, orders[i].address, orders[i].description));
                        }
                        setRows(formatedDataList);
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }, [])

    function createData(
        id: int,
        name: string,
        imageUrl: string,
        mobileNumber: number,
        address: string,
        description: string,

    ) {
        return { id, name, imageUrl, mobileNumber, address, description };
    }

    const [state, setState] = useState(false);
    const showDropdown = () => {
        setState(true)
    }
    const hideDropdown = () => {
        setState(false)
    }
    let url = "";


    return (
        <>
            <div className='navbarCustomerContainer'>
                <div className="navbarWrapper">
                    <div className="navbarLeft">
                        <h1 className='navbarTitle'>LOCAL  MARKET</h1>
                        <div className="navbar2List">
                            <div className="navbar2listitem">
                                <a href={url}>Home</a>
                            </div>
                        </div>

                        <div className="dropdown">
                            <div className="dropdown-menu" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                                Category
                                {state ? (<ul className='dropdown-list' onMouseEnter={showDropdown} >
                                    <li className="dropdown-list">
                                        <Link to="/homeFurniture">
                                            Home & Furniture
                                        </Link>
                                    </li>
                                    <li className="dropdown-list">
                                        <Link to="/fashion">
                                            Fashion
                                        </Link>
                                    </li>
                                    <li className="dropdown-list">
                                        <Link to="/grocery">
                                            Groceries
                                        </Link>
                                    </li>

                                </ul>) : null}

                            </div>
                        </div>
                    </div>
                    <div className="navbarCenter">
                        <div className="navbarSearchContainer">
                            <input type="text" placeholder='Search..' />
                        </div>

                    </div>


                    <div className="navbarRight">
                        <div className="navbar2IconItem">
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlined color="action" />
                            </Badge>
                        </div>
                        <div className="navbar2IconItem">
                            <Person style={{ color: 'grey' }} />
                        </div>
                        <div className="menuItem">
                            <button className="navbarButton">Orders</button>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell align="right">Image</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="right">Mobile Number</TableCell>
                                <TableCell align="right">Address</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.imageUrl}</TableCell>
                                    <TableCell align="right">{row.description}</TableCell>
                                    <TableCell align="right">{row.mobileNumber}</TableCell>
                                    <TableCell align="right">{row.address}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>


        </>
    )
}

