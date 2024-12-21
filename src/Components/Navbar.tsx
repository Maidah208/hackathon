"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faHeart,
  faShoppingCart,
  faChevronDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false); // State for side menu

  return (
    <>
      <nav className="flex items-center justify-between px-5 lg:px-20 h-16 border-b-2 border-gray-500">
        {/* Left Section: Logo and Navigation Links */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <div className="text-2xl font-bold">Bandage</div>

          {/* Navigation Links */}
          <ul className="lg:flex items-center space-x-8 text-gray-700 font-medium hidden sm:block">
            <li>
              <Link href="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/shop"
                className="hover:text-blue-500 transition flex items-center gap-1"
              >
                Shop
                <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
              </Link>
              {/* Dropdown */}
              <ul className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-md mt-2 shadow-lg py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Men</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Women</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Kids</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section: User Icons */}
        <div className="flex items-center space-x-6 lg:space-x-6">
          {/* Login/Register */}
          <Link
            href="/signup"
            className="hidden lg:flex items-center gap-2 hover:text-blue-500 transition"
          >
            <FontAwesomeIcon icon={faUser} className="text-xl" />
            <span>Login / Register</span>
          </Link>

          {/* Search */}
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="hidden lg:block text-xl text-gray-700 cursor-pointer hover:text-blue-500 transition"
          />

          {/* Wishlist */}
          <Link href="/wishlist" className="hidden lg:block">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-xl text-gray-700 cursor-pointer hover:text-red-500 transition"
            />
          </Link>

          {/* Cart */}
          <Link href="/cart" className="hidden lg:block">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-xl text-gray-700 cursor-pointer hover:text-blue-500 transition"
            />
          </Link>

          {/* Mobile Hamburger Icon */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
          >
            <FontAwesomeIcon
              icon={isSideMenuOpen ? faTimes : faBars}
              className="text-xl"
            />
          </div>
        </div>
      </nav>

      {/* Side Menu for mobile screens */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white border-r-2 border-gray-500 z-50 transform ${
          isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="p-6 space-y-6">
          <ul className="space-y-4 text-gray-700 font-medium">
            <li>
              <Link
                href="/"
                onClick={() => setIsSideMenuOpen(false)}
                className="hover:text-blue-500 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                onClick={() => setIsSideMenuOpen(false)}
                className="hover:text-blue-500 transition"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setIsSideMenuOpen(false)}
                className="hover:text-blue-500 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() => setIsSideMenuOpen(false)}
                className="hover:text-blue-500 transition"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setIsSideMenuOpen(false)}
                className="hover:text-blue-500 transition"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Text for mobile instead of icons */}
          <div className="flex flex-col space-y-6 text-gray-700 text-lg font-medium">
            <Link
              href="/signup"
              onClick={() => setIsSideMenuOpen(false)}
              className="hover:text-blue-500 transition"
            >
              Login / Register
            </Link>
            <Link
              href="/wishlist"
              onClick={() => setIsSideMenuOpen(false)}
              className="hover:text-blue-500 transition"
            >
              Wishlist
            </Link>
            <Link
              href="/cart"
              onClick={() => setIsSideMenuOpen(false)}
              className="hover:text-blue-500 transition"
            >
              Cart
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
