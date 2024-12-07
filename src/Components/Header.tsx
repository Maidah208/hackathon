import React from "react";
import '../app/globals.css';
const Header = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between h-12 px-4 py-2">
      {/* Left-aligned text */}
      <div className="flex items-center gap-4 mx-auto">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <p className="font-semibold border-b-2 border-gray-500">Shop Now</p>
      </div>
      {/* Right-aligned dropdown */}
      <select name="language" className="bg-ransparent px-2 py-1 mr-16">
        <option value="ENGLISH">ENGLISH</option>
        <option value="URDU">URDU</option>
        <option value="FRENCH">FRENCH</option>
      </select>
    </div>
  );
};

export default Header;
