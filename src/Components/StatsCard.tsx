import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface StatsCardProps {
  icon: any; // FontAwesome icon passed as a prop
  count: string; // The count number (e.g., "10.5k")
  text: string; // The description text (e.g., "Sellers active on our site")
  outerCircleColor?: string; // Color for the outer circle (default: gray)
  innerCircleColor?: string; // Color for the inner circle (default: black)
  bgColor?: string; // Background color for the entire card (default: white)
  borderStyle?: string; // CSS class for the border (default: border-zinc-500)
  headingTextSize?: string; // CSS class for heading text size (default: text-2xl)
  textColor?: string; // CSS class for text color (default: black)
}

const StatsCard: React.FC<StatsCardProps> = ({
  icon,
  count,
  text,
  outerCircleColor = "bg-zinc-500", // Default: gray
  innerCircleColor = "bg-black", // Default: black
  bgColor = "bg-white", // Default: white
  borderStyle = "border border-zinc-500", // Default border
  headingTextSize = "text-2xl", // Default heading text size
  textColor = "text-black", // Default text color
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center w-[220px] h-[200px] ${bgColor} ${borderStyle}`}
    >
      {/* Icon Container */}
      <div
        className={`relative flex justify-center items-center rounded-full h-16 w-16 ${outerCircleColor}`}
      >
        <div
          className={`absolute rounded-full h-12 w-12 flex items-center justify-center ${innerCircleColor}`}
        >
          <FontAwesomeIcon icon={icon} className="text-white text-xl" />
        </div>
      </div>

      {/* Text */}
      <div className={`mt-3 text-center ${textColor}`}>
        <p className={`font-bold mt-2 ${headingTextSize}`}>{count}</p>
        <p className="text-sm mt-2">{text}</p>
      </div>
    </div>
  );
};

export default StatsCard;
