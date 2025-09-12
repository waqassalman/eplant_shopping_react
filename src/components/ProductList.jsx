import React, { useState, useEffect } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
import { plantsData } from '../data/plantsdata'
import {addItem} from './CartSlice';
import { useSelector, useDispatch } from "react-redux";
function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
    const [addedToCart,setAddedToCart] = useState({})
    const dispatch = useDispatch();

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
    }
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    }
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    }

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };
    const handleAddToCart = (product) => {
        dispatch(addItem(product)); // Dispatch the action to add the product to the cart (Redux action)
      
        setAddedToCart((prevState) => ({ // Update the local state to reflect that the product has been added
          ...prevState, // Spread the previous state to retain existing entries
          [product.name]: true, // Set the current product's name as a key with value 'true' to mark it as added
        }));
      };
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };
    return (
        <div>
            {!showCart ? (
                <div className="product-grid">
                {plantsData.map((item, index) => (
                    <div key={index}>
                        <h1>
                            <div className="category">{item.category}</div>
                        </h1>
                        <div className="product-list"> 
                        
                            {item.plants.map((plant, plantIndex) => ( 
                                <div className="product-card" key={plantIndex}> 
                                <div className="product-sale"></div>
                                    <img
                                        className="product-image"
                                        src={plant.image} 
                                        alt={plant.name} 
                                    />
                                    <div className="product-title">{plant.name}</div> 
                                
                                    <div className="product-description">{plant.description}</div>
                                    <div className="product-cost">{plant.cost}</div>
                                    <button
                                        className="product-button"
                                        onClick={() => handleAddToCart(plant)} 
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
