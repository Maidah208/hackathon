import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-20 h-16 border-b-2 border-gray-500">
        <div className="text-2xl font-bold mt-4">Exclusive</div>
        {/* Links Section */}
        <div className="flex space-x-8 font-medium mt-4">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/signup" className="hover:text-gray-400">
            Sign Up
          </Link>
        </div>
        <div className="flex items-center space-x-6 mt-1">
          {/* Search Bar Section */}
          <div className="flex items-center space-x-3 rounded-md border border-gray-200 bg-gray-100 p-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="text-sm px-3 w-[243px] outline-none bg-transparent"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-gray-500"
            />
          </div>
          {/* Heart Icon and Notification Badge */}
          <Link href="/wishlist">
            <div className="relative">
              <FontAwesomeIcon icon={faHeart} className="text-2xl" />
              {/* Notification Badge */}
              <div className="absolute top-0 right-[-4px] text-xs text-white bg-red-700 rounded-full w-[14px] h-[14px] flex items-center justify-center">
                5
              </div>
            </div>
          </Link>
          {/* Cart Icon & Notification Badge */}
          <Link href="/cart">
            <div className="relative">
              <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
              {/* Notification Badge */}
              <div className="absolute top-0 right-[-4px] text-xs text-white bg-red-700 rounded-full w-[14px] h-[14px] flex items-center justify-center">
                3
              </div>
            </div>
          </Link>
          <Link href="/account">
            <div>
              <FontAwesomeIcon icon={faUser} className="text-2xl" />
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
