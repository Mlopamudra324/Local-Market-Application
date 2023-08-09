import React, { useState } from 'react';
import axios from 'axios';
import './AddProduct.css'

export default function AddProducts() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [productCount, setProductCount] = useState("");
    const [description, setDescription] = useState("");

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "name") {
            setName(value);
        }
        if (id === "price") {
            setPrice(value);
        }
        if (id === "category") {
            setCategory(value);
        }

        if (id === "image") {
            setImage(value);
        }
        if (id === "productCount") {
            setProductCount(value);
        }
        if (id === "description") {
            setDescription(value);
        }
        console.log(name, price, category, image, productCount, description)
    }
    const handleSubmit = (event) => {
        if (localStorage.getItem("isVendor") === false) {
            alert("You are not a vendor!!");
        } else {
            axios.post('http://127.0.0.1:8000/add_product', {
                "name": name,
                "price": price,
                "category": category,
                "image_url": image,
                "product_count": productCount,
                "vendor_id": localStorage.getItem("userId"),
                "description": description
            }, {
                headers: {
                    "token": localStorage.getItem("token")
                }
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            console.log(name, price, category, image, productCount, description)
            event.preventDefault();
            alert(`The product you entered was: ${name}`)
        }

    }
    return (
        <div className='addProductForm'>
            <form className='formContainer'>
                <label className='addProductItem'>Product Name:
                    <input className='addProductInput' type="text"
                        id='name' onChange={handleInputChange} />
                </label>
                <label className='addProductItem'>Price:
                    <input className='addProductInput' type="number" id='price' onChange={handleInputChange} />
                </label>
                <label className='addProductItem'>Category:
                    <input className='addProductInput' type="text" id='category' onChange={handleInputChange} />
                </label>
                <label className='addProductItem'>Image URL:
                    <input className='addProductInput' type="file" id='image' onChange={handleInputChange} />
                </label>
                <label className='addProductItem'>Product count:
                    <input className='addProductInput' type="number" onChange={handleInputChange} id='productCount' />
                </label>
                <label className='addProductItem'>Description:
                    <input className='addProductInput' type="text" onChange={handleInputChange} id='description' />
                </label>

                <input type="submit" onClick={handleSubmit} />
            </form>
        </div>
    )
}
