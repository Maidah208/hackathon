import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobilePhone } from "@fortawesome/free-solid-svg-icons";

interface CategoryCardProps {
  title?: string;
  color?: string;
  icon?: any;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title = "Games",
  color = "text-black",
  icon = faMobilePhone,
}) => {
  return (
    <div className="group flex flex-col items-center justify-center space-y-4 h-36 w-36 px-8 py-8 border border-black hover:bg-red-600 hover:cursor-pointer hover:text-white transition-all">
      {/* Icon */}
      <div>
        <FontAwesomeIcon
          icon={icon}
          className={`${color} text-4xl group-hover:text-white transition-transform`}
        />
      </div>
      {/* Title */}
      <p className="font-semibold text-xl">
        {title}
      </p>
    </div>
  );
};

export default CategoryCard;
