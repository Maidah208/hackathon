import React from "react";
import Image from "next/image";
import BestSellerProductCard from "./BestSellerProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHeart,
  faEye,
  faShoppingCart,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const ProductDetails = () => {
  return (
    <div>
      <div className="mx-4 my-14 sm:mx-24">
        {/* Breadcrumb */}
        <div className="text-gray-500">
          <div className="flex gap-2 items-center justify-center sm:justify-start">
            <span>Home</span>
            <span>/</span>
            <span>Shop</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col sm:flex-row gap-10 py-20">
          {/* Left Section - 60% Width */}
          <div className="w-full sm:w-[60%] p-6 rounded-lg flex items-center justify-center cursor-pointer transition-transform">
            <div className="relative w-full h-full">
              <Image
                src="/images/product.png"
                alt="Main Product Image"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Right Section - 40% Width */}
          <div className="w-full sm:w-[40%] p-6 text-gray-800">
            {/* Product Title */}
            <h2 className="text-2xl font-semibold mb-4">Floating Phone</h2>

            {/* Rating and Reviews */}
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="text-yellow-400"
                />
              ))}
              <p className="text-sm text-gray-500 ml-2">(150 Reviews)</p>
            </div>

            {/* Price */}
            <p className="text-2xl font-bold text-red-600 mb-2">$1,139.33</p>

            {/* Availability */}
            <p className="text-sm text-blue-600 mb-4">Availability: In Stock</p>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>

            {/* Divider */}
            <div className="border-b border-gray-300 mb-4"></div>

            {/* Color Selection */}
            <div className="mb-4 flex items-center space-x-2">
              <p className="font-semibold text-lg mb-2">Colors:</p>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-zinc-700 cursor-pointer hover:border-gray-400 transition-all"></div>
                <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-zinc-700 cursor-pointer hover:border-gray-400 transition-all"></div>
                <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-zinc-700 cursor-pointer hover:border-gray-400 transition-all"></div>
                <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-zinc-700 cursor-pointer hover:border-gray-400 transition-all"></div>
              </div>
            </div>

            {/* Button Row - Select Options Button and Icons */}
            <div className="flex justify-between items-center border-b border-gray-300 pb-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Select Options
              </button>

              {/* Icon Row */}
              <div className="flex gap-6">
                <div className="flex items-center justify-center text-center cursor-pointer hover:bg-blue-600 hover:text-white transition-colors">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="cursor-pointer hover:text-white transition-colors"
                  />
                </div>
                <div className="flex items-center justify-center text-center cursor-pointer hover:bg-blue-600 hover:text-white transition-colors">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="cursor-pointer hover:text-white transition-colors"
                  />
                </div>
                <div className="flex items-center justify-center text-center cursor-pointer hover:bg-blue-600 hover:text-white transition-colors">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="cursor-pointer hover:text-white transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section above product details */}
      <div className="flex justify-center items-center gap-6 text-gray-700 mb-8">
        <div className="text-center">
          <h2>Description</h2>
        </div>
        <div className="text-center font-semibold">
          <h2>Additional Information</h2>
        </div>
        <div className="text-center font-semibold">
          <h2>Reviews(0)</h2>
        </div>
      </div>

      {/* Product Details Section (3 columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="flex justify-center items-center">
          <Image
            src="/images/product(2).png"
            alt="Product 2"
            height={400}
            width={250}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="text-zinc-500">
          <h1 className="font-bold text-2xl text-black pb-6">
            The Quick Fox Jumps Over
          </h1>
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <br />
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <br />
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="font-bold text-2xl text-black pb-6">
              The Quick Fox Jumps Over
            </h1>
            <div className="flex gap-6 text-zinc-500 text-semibold">
              <FontAwesomeIcon icon={faArrowRight} />
              <p>The quick fox jumps over</p>
            </div>
            <div className="flex gap-6 space-y-2 items-center text-zinc-500 text-semibold">
              <FontAwesomeIcon icon={faArrowRight} />
              <p>The quick fox jumps over</p>
            </div>
            <div className="flex gap-6 space-y-2 items-center text-zinc-500 text-semibold">
              <FontAwesomeIcon icon={faArrowRight} />
              <p>The quick fox jumps over</p>
            </div>
            <div className="flex gap-6 space-y-2 items-center text-zinc-500 text-semibold">
              <FontAwesomeIcon icon={faArrowRight} />
              <p>The quick fox jumps over</p>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-2xl text-black pb-6">
              The Quick Fox Jumps Over
            </h1>
            <div className="flex gap-6 text-zinc-500 text-semibold">
              <FontAwesomeIcon icon={faArrowRight} />
              <p>The quick fox jumps over</p>
            </div>
            <div className="flex gap-6 space-y-2 items-center text-zinc-500 text-semibold">
              <FontAwesomeIcon icon={faArrowRight} />
              <p>The quick fox jumps over</p>
            </div>
            <div className="flex gap-6 space-y-2 items-center text-zinc-500 text-semibold">
              <FontAwesomeIcon icon={faArrowRight} />
              <p>The quick fox jumps over</p>
            </div>
          </div>
        </div>
      </div>

      {/* Best Selling Products Card */}
      <div>
        <h1 className="font-bold text-2xl mx-4 sm:mx-36 mt-16">BEST SELLER PRODUCTS</h1>
        <div className="flex flex-wrap justify-center items-center gap-4 py-12">
          <BestSellerProductCard
            imageSrc="/images/bestSeller (2).png"
            title="AK-900 Wired Keyboard"
            price={960}
            originalPrice={1160}
          />
          <BestSellerProductCard
            imageSrc="/images/bestSeller (1).png"
            title="AK-900 Wired Keyboard"
            price={960}
            originalPrice={1160}
          />
          <BestSellerProductCard
            imageSrc="/images/bestSeller (3).png"
            title="AK-900 Wired Keyboard"
            price={960}
            originalPrice={1160}
          />
          <BestSellerProductCard
            imageSrc="/images/bestSeller (4).png"
            title="AK-900 Wired Keyboard"
            price={960}
            originalPrice={1160}
          />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 py-12">
          <BestSellerProductCard
            imageSrc="/images/bestSeller (2).png"
            title="AK-900 Wired Keyboard"
            price={960}
            originalPrice={1160}
          />
          <BestSellerProductCard
            imageSrc="/images/bestSeller (1).png"
            title="AK-900 Wired Keyboard"
            price={960}
            originalPrice={1160}
          />
          <BestSellerProductCard
            imageSrc="/images/bestSeller (3).png"
            title="AK-900 Wired Keyboard"
            price={960}
            originalPrice={1160}
          />
          <BestSellerProductCard
            imageSrc="/images/bestSeller (4).png"
            title="AK-900 Wired Keyboard"
            price={960}
            originalPrice={1160}
          />
        </div>
      </div>

      {/* Logos */}
      <div className="flex items-center justify-center">
        <Image src="/images/logos.png" alt="" height={100} width={1000} />
      </div>
    </div>
  );
};

export default ProductDetails;
