import { React, useState, } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
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



export default function DashboardC() {
    const [rows, setRows] = useState([]);
    useEffect(() => {
        console.log('render');
        axios.get('http://127.0.0.1:8000/list_products', {
            params: {
                //   ID: 12345
                // category: category,
                // name: name,
                // vendor_id: localStorage.getItem("userId")
            }, headers: {
                "token": localStorage.getItem("token")
            }
        })
            .then(function (response) {
                console.log(response);
                if (response.data.success === true) {
                    if (response.data.message === "Successfully fetched product list") {
                        const products = response.data.data;
                        const formatedDataList = [];
                        for (let i = 0; i < products.length; i++) {
                            formatedDataList.push(createData(products[i].id, products[i].name, products[i].category, products[i].price, products[i].product_count, products[i].description, products[i].image));
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
        category: string,
        price: number,
        stock: number,
        description: string,
        image: string,

    ) {
        return { id, name, category, price, stock, description, image };
    }

    const [state, setState] = useState(false);
    const showDropdown = () => {
        setState(true)
    }
    const hideDropdown = () => {
        setState(false)
    }
    let url = "";

    const [productId, setProductId] = useState([]);
    const [userId, setUserId] = useState([]);

    // const navigate = useNavigate();
    function handleOnClick(id) {
        axios.post('http://127.0.0.1:8000/add_order', {
            "product_id": id,
            "user_id": localStorage.getItem("userId"),
        }, {
            headers: {
                "token": localStorage.getItem("token")
            }
        })
            .then(function (response) {
                console.log(response);
                alert(response.data.message);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    // 
    // const navigate = useNavigate();
    // const getOrders = () => navigate('/Orders');
    // function getOrders() {
    //     <Navigate to="/Orders" />
    // }


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
                        <Link to="/orders">
                            <button className="navbarButton">
                                Orders
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell align="right">Category</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Stock</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="right">Image</TableCell>


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
                                    <TableCell align="right">{row.category}</TableCell>
                                    <TableCell align="right">{row.price}</TableCell>
                                    <TableCell align="right">{row.stock}</TableCell>
                                    <TableCell align="right">{row.description}</TableCell>
                                    <TableCell align="right">{row.image}</TableCell>
                                    <Button variant="contained" align="right" onClick={() => handleOnClick(row.id)}   >Buy Now</Button>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>


        </>
    )
}

