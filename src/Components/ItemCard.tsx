import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faEye } from "@fortawesome/free-solid-svg-icons";

interface ItemCardProps {
  imageSrc?: string;
  title?: string;
  price?: number;
  originalPrice?: number;
  rating?: number;
  starColor?: string;
  icons?: { icon: any; color?: string }[];
}

const ItemCard: React.FC<ItemCardProps> = ({
  imageSrc = "/images/joystick.png",
  title = "HAVIT HV-G92 Gamepad",
  price = 120,
  originalPrice = 160,
  rating = 5,
  starColor = "text-yellow-400",
  icons = [
    { icon: faHeart, color: "text-red-700" },
    { icon: faEye, color: "text-black" },
  ],
}) => {
  return (
    <div className="relative w-[250px] h-[300px] bg-white shadow-md hover:shadow-lg transition-shadow group">
      {/* Image Section */}
      <div className="relative flex justify-center items-center bg-gray-100 overflow-hidden h-[150px] group-hover:opacity-90 transition-opacity">
        <Image src={imageSrc} alt={title} height={100} width={100} />

        {/* Icons Section */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 items-end">
          {icons.map(({ icon, color = "text-gray-600" }, index) => (
            <FontAwesomeIcon
              key={index}
              icon={icon}
              className={`${color} text-xl cursor-pointer hover:scale-110 transition-transform`}
            />
          ))}
        </div>

        {/* Hover "Add to Cart" Section */}
        <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity">
          Add to Cart
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <p className="font-semibold text-md text-gray-800">{title}</p>

        {/* Price Section */}
        <div className="flex items-center mt-2">
          <p className="text-lg font-bold text-red-600">${price}</p>
          <p className="ml-3 text-gray-500 line-through">${originalPrice}</p>
        </div>

        {/* Rating Section */}
        <div className="flex items-center mt-3 gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              className={i < rating ? starColor : "text-gray-400"}
            />
          ))}
          <p className="ml-2 text-gray-500 text-sm">({rating * 22})</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
