import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

interface TeamCardProps {
  imageSrc: string;
  name: string;
  designation: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ imageSrc, name, designation }) => {
  return (
    <div className="md:w-[250px] md:h-[390px] sm:h-[300px]">
      {/* Image */}
      <div className="w-full">
        <Image
          src={imageSrc}
          width={200}
          height={200}
          alt={name}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Name and Designation */}
      <div className="mt-3 w-full">
        <p className="font-bold text-lg">{name}</p>
        <p className="font-thin text-sm">{designation}</p>
      </div>

      {/* Social Icons */}
      <div className="space-x-3 mt-3">
        <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />

        <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />

        <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
      </div>
    </div>
  );
};

export default TeamCard;
