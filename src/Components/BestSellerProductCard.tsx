
import Image from "next/image";
import Link from "next/link";

interface BestSellerProductCardProps {
  imageSrc?: string;
  title?: string;
  text?: string;
  price?: number;
  originalPrice?: number;
  productId?: string;
}

const BestSellerProductCard: React.FC<BestSellerProductCardProps> = ({
  imageSrc = "/images/bestSeller (1).png",
  title = "Graphic Design",
  text = "English Department",
  price = 6.48,
  originalPrice = 16.48,
  productId = "12345",
}) => {
  return (
    <div className="relative w-[250px] h-[400px] bg-white group">

      {/* Image Section */}
      <div className="relative w-full h-[60%]">
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
      <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
        {/* Title */}
        <p className="font-semibold text-lg text-gray-800 text-left">{title}</p>
        
        {/* Description */}
        <p className="text-sm text-gray-500 mt-1 text-left">{text}</p>

        {/* Price Section */}
        <div className="flex justify-start items-center mt-2 space-x-2">
          <p className="text-lg font-bold text-gray-400 line-through">${originalPrice}</p>
          <p className="text-lg font-bold text-green-600">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default BestSellerProductCard;
