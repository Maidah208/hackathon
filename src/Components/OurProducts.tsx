import React from "react";
import ItemCard from "./ItemCard";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";

const OurProducts = () => {
  return (
    <div className="mx-16 py-10">
      {/* Heading */}
      <div className="flex text-red-600 gap-4 items-center mb-4">
        <div className="bg-red-600 w-4 h-6 rounded"></div>
        <p className="font-bold text-xl">Our Products</p>
      </div>

      <div className="flex gap-12 items-center">
        <div className="text-2xl font-bold">Explore our Products</div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap my-8 space-x-6 space-y-6 items-center justify-center">
        <ItemCard />
        <ItemCard
          imageSrc="/images/keyboard.png"
          rating={4} // 3 stars yellow, 2 stars grey
          title="AK-900 Wired Keyboard"
          price={960}
          originalPrice={1160}
          icons={[
            { icon: faHeart, color: "text-red-700" },
            { icon: faEye, color: "text-black" },
          ]}
        />
        <ItemCard
          imageSrc="/images/chair.png"
          rating={4} // 3 stars yellow, 2 stars grey
          title="S-Series Comfort Chair "
          price={375}
          originalPrice={400}
          icons={[
            { icon: faHeart, color: "text-red-700" },
            { icon: faEye, color: "text-black" },
          ]}
        />
        <ItemCard
          imageSrc="/images/tv.png"
          rating={2} // 3 stars yellow, 2 stars grey
          title="IPS LCD Gaming Monitor"
          price={370}
          originalPrice={400}
          icons={[
            { icon: faHeart, color: "text-red-700" },
            { icon: faEye, color: "text-black" },
          ]}
        />
        <ItemCard />
        <ItemCard
          imageSrc="/images/keyboard.png"
          rating={4} // 3 stars yellow, 2 stars grey
          title="AK-900 Wired Keyboard"
          price={960}
          originalPrice={1160}
          icons={[
            { icon: faHeart, color: "text-red-700" },
            { icon: faEye, color: "text-black" },
          ]}
        />
        <ItemCard
          imageSrc="/images/chair.png"
          rating={4} // 3 stars yellow, 2 stars grey
          title="S-Series Comfort Chair "
          price={375}
          originalPrice={400}
          icons={[
            { icon: faHeart, color: "text-red-700" },
            { icon: faEye, color: "text-black" },
          ]}
        />
        <ItemCard
          imageSrc="/images/tv.png"
          rating={2} // 3 stars yellow, 2 stars grey
          title="IPS LCD Gaming Monitor"
          price={370}
          originalPrice={400}
          icons={[
            { icon: faHeart, color: "text-red-700" },
            { icon: faEye, color: "text-black" },
          ]}
        />
      </div>

      {/* Button */}
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="py-2 px-8 bg-red-600 hover:bg-red-700 text-white rounded transition-all ease-in-out duration-300"
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default OurProducts;
