import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FeaturedPostCardProps {
  imageSrc: string;
  title: string;
  description: string;
  date: string;
  comments: number;
}

const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({
  imageSrc,
  title,
  description,
  date,
  comments,
}) => {
  return (
    <div className="w-[300px] bg-white overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-[200px]">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title */}
        <p className="font-semibold text-xl text-gray-800 mb-2">{title}</p>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        {/* Date and Comments */}
        <div className="flex justify-between text-sm text-gray-500">
          <p>{date}</p>
          <p>{comments} comments</p>
        </div>

        {/* Learn More Link */}
        <Link href="#" className="text-blue-600 text-sm font-semibold mt-2 inline-block">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
