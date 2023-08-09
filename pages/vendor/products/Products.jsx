import { React, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Products() {
    const [rows, setRows] = useState([]);
    axios.get('http://127.0.0.1:8000/list_products', {
        params: {
            //   ID: 12345
            // category: category,
            // name: name,
            vendor_id: localStorage.getItem("userId")
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
                        formatedDataList.push(createData(products[i].name, products[i].category, products[i].price, products[i].product_count, products[i].description, products[i].image));
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


    function createData(
        name: string,
        category: string,
        price: number,
        stock: number,
        description: string,
        image: string,

    ) {
        return { name, category, price, stock, description, image };
    }

    return (
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
                                <TableCell align="right"> <img src={row.image} /> </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
