import React from 'react'
import Image from 'next/image'

const ClassicProduct = () => {
  return (
    <div className="bg-[#23856D] flex flex-col lg:flex-row items-center px-8 py-12 text-white">
      {/* Left Side: Text */}
      <div className="lg:w-1/2 flex flex-col justify-center space-y-8 pl-0 lg:pl-32 text-center lg:text-left">
        <h5 className="text-sm font-semibold">SUMMER 2020</h5>
        <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl">Vita Classic Product</h2>
        <p className="text-lg leading-relaxed">
          We know how large objects will act, <br />
          We know how are objects will act, We know
        </p>
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
          <span className="text-2xl font-semibold">$16.48</span>
          <button className="bg-[#2DC071] text-white px-6 py-2 hover:bg-transparent hover:text-[#2DC071] hover:border hover:border-[#2DC071] transition-all duration-300">
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <Image
          src="/images/classicProduct.png"
          alt="Classic Product"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default ClassicProduct
