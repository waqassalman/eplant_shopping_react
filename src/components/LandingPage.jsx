import React from 'react';
import './LandingPage.css';
import CategoryList from './categoryList';

function LandingPage() {
  const categoryListIndexValue = 3;
  const CategoryProductListingIndex = 3;
  const showCategoryProducts = false;
  return (

    <div>
      <div className="about-us-container">
        {/* <h1 className="about-us-heading">About Us</h1> */}
        <div className="row">
          <div className="column">
            <p className="about-us-content">
              <p className="about-us-heading">Welcome to Ecopure Nursery, where green meets serenity!</p>
              At Ecopure Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of
              high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and
              more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every
              plant enthusiast.
            </p>
          </div>
          <div className="column home-image-col">
            <img
              className="home-image"
              src='/eplant_shopping_react/src/assets/plant-2.png'
              alt=""
            />
          </div>
        </div>
      </div>
      
      <CategoryList categoryList={categoryListIndexValue} categoryProduct={CategoryProductListingIndex} showCategoryProducts={showCategoryProducts}/>
      <div className="team-container">
        <h1>Our Team</h1>
        <p>
          Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care.
          Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of
          the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your
          home or office.
        </p>
      </div>
    </div>

  );
}

export default LandingPage;
