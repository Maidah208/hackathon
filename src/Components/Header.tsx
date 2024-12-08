import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "../app/globals.css";

const Header = () => {
  return (
    <div className="bg-[#252B42] text-white flex flex-col md:flex-row items-center justify-between h-auto md:h-12 px-6 py-4 md:px-6 md:py-2">
      {/* Left Side: Contact Info */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <div className="flex items-center gap-2 text-sm md:text-base">
          <FontAwesomeIcon icon={faPhone} className="text-lg md:text-xl" />
          <p>(225) 555-0118</p>
        </div>
        <div className="flex items-center gap-2 text-sm md:text-base">
          <FontAwesomeIcon icon={faEnvelope} className="text-lg md:text-xl" />
          <p>michelle.rivera@example.com</p>
        </div>
      </div>

      {/* Center Text */}
      <div className="text-center md:text-left mt-4 md:mt-0">
        <p className="text-sm md:text-base">Follow Us and get a chance to win 80% off-</p>
      </div>

      {/* Right Side: Social Links */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <FontAwesomeIcon icon={faFacebook} className="text-xl md:text-2xl" />
        <FontAwesomeIcon icon={faTwitter} className="text-xl md:text-2xl" />
        <FontAwesomeIcon icon={faInstagram} className="text-xl md:text-2xl" />
        <FontAwesomeIcon icon={faYoutube} className="text-xl md:text-2xl" />
      </div>
    </div>
  );
};

export default Header;
