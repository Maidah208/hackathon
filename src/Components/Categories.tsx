import React from "react";
import CategoryCard from "./CategoryCard";
import { faMobilePhone, faComputer, faStopwatch, faCamera, faHeadphones,faGamepad } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  return (
    <div className="pb-20 mx-16">
      {/* Heading */}
      <div className="flex text-red-600 gap-4 items-center mb-4">
        <div className="bg-red-600 w-4 h-6 rounded"></div>
        <p className="font-bold text-xl">Categories</p>
      </div>

      {/* Timing */}
      <div className="flex gap-12 items-center">
        <div className="text-2xl font-bold">Browse By Category</div>
      </div>
      {/* Cards */}
      <div className="flex gap-6 items-center justify-center pt-10">
        <CategoryCard title="Phones" icon={faMobilePhone} />
        <CategoryCard title="Computers" icon={faComputer} />
        <CategoryCard title="SmartWatches" icon={faStopwatch} />
        <CategoryCard title="Headphones" icon={faHeadphones} />
        <CategoryCard title="Camera" icon={faCamera} />
        <CategoryCard title="Gaming" icon={faGamepad} />
      </div>
    </div>
  );
};

export default Categories;
