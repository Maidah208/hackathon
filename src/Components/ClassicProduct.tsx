import React from "react";

const ClassicProduct = () => {
  return (
    <div className="classic-product">
      {/* Left Side: Text */}
      <div className="text-content">
        <h5 className="sub-heading">SUMMER 2020</h5>
        <h2 className="main-heading">Vita Classic Product</h2>
        <p className="description">
          We know how large objects will act, <br />
          We know how objects will act, We know
        </p>
        <div className="price-and-button">
          <span className="price">$16.48</span>
          <button className="add-to-cart">ADD TO CART</button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="image-content">
        <img
          src="/images/classicProduct.png"
          alt="Classic Product"
          className="product-image"
        />
      </div>
    </div>
  );
};

export default ClassicProduct;
