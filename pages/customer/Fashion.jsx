import React, { useState } from 'react';
import './Fashion.css'

export default function
    HomeFurniture() {
    const [name, setName] = useState("");

    const handleSubmit = () => {
        console.log();
        alert(`product is bought`)
    }
    return (
        <div className='container'>
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
            </div>

            <div className="homeContainer">
                <div className="listConatiner">
                    <h2 className="productName">Table set</h2>
                    <img src="./assets/fashion/image1.jpg" alt="" className="productImg" />
                    <span className="itemPrice">8500</span>
                    <button className='productButton'>Buy Now</button>
                </div>
                <div className="listConatiner">
                    <h2 className="productName">Sofa set</h2>
                    <img src="./assets/fashion/image2.jpg" alt="" className="productImg" />
                    <span className="itemPrice">15000</span>
                    <button className='productButton'>Buy Now</button>
                </div>
                <div className="listConatiner">
                    <h2 className="productName">Chair set</h2>
                    <img src="./assets/fashion/image3.jpg" alt="" className="productImg" />
                    <span className="itemPrice">10000</span>
                    <button className='productButton'>Buy Now</button>
                </div>
                <div className="listConatiner">
                    <h2 className="productName">Bed</h2>
                    <img src="./assets/fashion/image4.jpg" alt="" className="productImg" />
                    <span className="itemPrice">25000</span>
                    <button className='productButton'>Buy Now</button>
                </div>
                <div className="listConatiner">
                    <h2 className="productName">Lights</h2>
                    <img src="./assets/fashion/image5.jpg" alt="" className="productImg" />
                    <span className="itemPrice">5000</span>
                    <button className='productButton' onClick={() => handleSubmit()} type='submit'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}
