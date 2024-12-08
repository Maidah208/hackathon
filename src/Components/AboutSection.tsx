import React from "react";
import Image from "next/image";
import TeamCard from "./TeamCard";

const AboutSection = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Text and Image Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-28 my-4 justify-center mx-8 text-black">
        {/* Contact Details */}
        <div className="space-y-4 py-32 md:w-1/2">
          <p className="font-medium uppercase tracking-wide">ABOUT COMPANY</p>
          <h1 className="text-4xl font-bold">ABOUT US</h1>
          <p className="text-gray-500">
            We know how large objects will act, <br />
            but things on a small scale can often be unpredictable.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300">
            Get Quote Now
          </button>
        </div>

        {/* Contact Image */}
        <div className="mt-8 md:mt-0 md:w-1/2">
          <Image
            src="/images/aboutImage.png"
            alt="Contact Us"
            height={600}
            width={400}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="flex flex-col md:flex-row space-y-8 md:space-x-8 px-6 md:px-24 pb-28 items-start">
        {/* Left Section */}
        <div>
          <p className="text-red-600 text-lg font-medium pb-7">Problems trying</p>
          <h3 className="text-3xl font-bold text-gray-800">
            Met minim Mollie non desert <br /> Alamo est sit cliquey dolor do <br /> met sent.
          </h3>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-zinc-500 text-base pt-24 md:pt-0">
            Problems trying to resolve the conflict between the two major realms
            of <br /> Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap gap-8 justify-center">
        <div className="font-bold flex flex-col space-y-4 items-center justify-center">
          <p className="text-4xl">15K</p>
          <p className="text-zinc-500">Happy Customers</p>
        </div>
        <div className="font-bold flex flex-col space-y-4 items-center justify-center">
          <p className="text-4xl">150K</p>
          <p className="text-zinc-500">Monthly Visitors</p>
        </div>
        <div className="font-bold flex flex-col space-y-4 items-center justify-center">
          <p className="text-4xl">15</p>
          <p className="text-zinc-500">Countries Worldwide</p>
        </div>
        <div className="font-bold flex flex-col space-y-4 items-center justify-center">
          <p className="text-4xl">100+</p>
          <p className="text-zinc-500">Top Partners</p>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative rounded-xl py-10">
        {/* Image */}
        <Image
          src="/images/videoImage.png"
          alt="Video Thumbnail"
          height={600}
          width={1000}
          className="rounded-xl"
        />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white text-blue-600 p-4 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* About Owner Section */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Meet Our Team</h1>
        <p className="text-zinc-500 text-center">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-20 mb-16">
          <div className="flex gap-5">
            <TeamCard
              imageSrc="/images/team (1).png"
              name="Tom Cruise"
              designation="Founder and Chairman"
            />
            <TeamCard
              imageSrc="/images/team (1).jpg"
              name="Emma Watson"
              designation="Managing Director"
            />
            <TeamCard
              imageSrc="/images/team (2).jpg"
              name="Will Smith"
              designation="Product Designer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
