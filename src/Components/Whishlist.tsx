import React from "react";
import ItemCard from "./ItemCard";

const Whishlist = () => {
  return (
    <div className="mt-14">
      {/* heading */}
      <div className="flex items-center justify-between mx-5 sm:mx-14 my-5">
        {/* Left-aligned Text */}
        <p className="text-sm sm:text-base">Wishlist (4)</p>

        {/* Right-aligned Button */}
        <button
          type="submit"
          className="py-2 px-8 bg-blue-600 hover:text-blue-500 text-white hover:border-blue-500 hover:bg-transparent border-2 border-transparent transition-all duration-300 text-xs sm:text-sm"
        >
          Move All to Bag
        </button>
      </div>

      {/* cards */}
      <div className="flex flex-wrap gap-6 items-center justify-center my-8">
        <ItemCard />
        <ItemCard
          imageSrc="/images/featured (2).jpeg"
          title="Graphic Designer"
          price={960}
          originalPrice={1160}
        />
        <ItemCard
          imageSrc="/images/featured (3).jpeg"
          title="Graphic Designer"
          price={375}
          originalPrice={400}
        />
        <ItemCard
          imageSrc="/images/featured (4).jpeg"
          title="Graphic Designer"
          price={370}
          originalPrice={400}
        />
        
      </div>
    </div>
  );
};

export default Whishlist;
