import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { plantsData } from '../data/plantsdata'
import './navbar.css'

const CategoryList = (category) => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    return (
        <div>
            {plantsData.slice(0, category.categoryProduct).map((item, index) => (
                <div key={index}>
                    {category.showCategoryProducts ? (
                        <div className="product-list">
                            {item.plants.slice(0, category.categoryList).map((plant, plantIndex) => (
                                <div className="product-card" key={plantIndex}>
                                    <div className="product-sale">sale</div>
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
                    )
                        :
                        (<div className="row">
                            <div className="product-card">
                                <img
                                    className="product-image"
                                    src={item.category_img}
                                    alt={item.category_img}
                                />
                                <div className="product-title">{item.category}</div>
                                <button
                                        className="product-button"
                                        onClick={() => handleAddToCart(plant)}
                                    >
                                        Add to Cart
                                    </button>
                            </div>
                            </div>
                        )
                    }
                </div>
            ))}
        </div>
    )
}

export default CategoryList;