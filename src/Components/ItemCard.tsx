import React from "react";
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
    <div className="item-card">
      {/* Image Section */}
      <div className="image-container">
        <Link href={`/products/${productId}`}>
          <img src={imageSrc} alt={title} className="item-image" />
        </Link>
      </div>

      {/* Content Section Below Image */}
      <div className="item-content">
        <p className="item-title">{title}</p>
        <p className="item-text">{text}</p>
        <div className="item-prices">
          <span className="original-price">${originalPrice}</span>
          <span className="discounted-price">${price}</span>
        </div>
        <div className="color-circles">
          <div className="circle red"></div>
          <div className="circle blue"></div>
          <div className="circle yellow"></div>
          <div className="circle purple"></div>
          <div className="circle green"></div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
