import React from "react";
import ItemCard from "./ItemCard";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";

const Freshsales = () => {
  return (
    <div className="my-24 mx-16">
      {/* Heading */}
      <div className="flex text-red-600 gap-4 items-center mb-4">
        <div className="bg-red-600 w-4 h-6 rounded"></div>
        <p className="font-bold text-xl">Today's</p>
      </div>

      {/* Timing */}
      <div className="flex gap-12 items-center">
        <div className="text-2xl font-bold">Flash Sales</div>

        <div className="flex items-center">
          <div className="flex flex-col">
            <p className="text-sm">Days</p>
            <p className="text-3xl font-bold">03</p>
          </div>
          <p className="text-red-600 ml-3 font-extrabold text-3xl">:</p>
        </div>

        <div className="flex items-center">
          <div className="flex flex-col">
            <p className="text-sm">Hours</p>
            <p className="text-3xl font-bold">23</p>
          </div>
          <p className="text-red-600 ml-3 font-extrabold text-3xl">:</p>
        </div>

        <div className="flex items-center">
          <div className="flex flex-col">
            <p className="text-sm">Minutes</p>
            <p className="text-3xl font-bold">19</p>
          </div>
          <p className="text-red-600 ml-1 font-extrabold text-3xl">:</p>
        </div>

        <div className="flex items-center">
          <div className="flex flex-col">
            <p className="text-sm">Seconds</p>
            <p className="text-3xl font-bold">56</p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="flex my-8 space-x-6">
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
        <ItemCard
          imageSrc="/images/chair.png"
          rating={3} // 3 stars yellow, 2 stars grey
          title="S-Series Comfort Chair "
          price={375}
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
          className="py-2 px-8 bg-red-600 hover:bg-red-700 text-white rounded transition-all ease-in-out duration-300">
          View All Products
        </button>
      </div>
      <div className="border-b border-b-slate-500 py-6"></div>
    </div>
  );
};

export default Freshsales;
