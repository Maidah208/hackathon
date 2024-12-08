import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ItemCardProps {
  imageSrc?: string;
  title?: string;
  text?: string;
  price?: number;
  originalPrice?: number;
  productId?: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  imageSrc = "/images/featured (1).jpeg",
  title = "Graphic Designer",
  text = "English Department",
  price = 120,
  originalPrice = 160,
  productId = "12345",
}) => {
  return (
    <div className="relative w-[250px] h-[450px] bg-white shadow-md transition-shadow group">

      {/* Image Section */}
      <div className="relative w-full h-[80%]">
        <Link href={`/products/${productId}`}>
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Content Section Below Image */}
      <div className="absolute bottom-0 left-0 right-0 bg-white p-4 text-center">
        {/* Title */}
        <p className="font-semibold text-lg text-gray-800">{title}</p>
        
        {/* Description */}
        <p className="text-sm text-gray-500 mt-2">{text}</p>

        {/* Price Section */}
        <div className="flex justify-center items-center mt-3 space-x-3">
          <p className="text-lg font-bold text-gray-400">${originalPrice}</p>
          <p className="text-lg font-bold text-green-600">${price}</p>
        </div>

        {/* Circles Section */}
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
          <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
          <div className="w-4 h-4 rounded-full bg-purple-500"></div>
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
