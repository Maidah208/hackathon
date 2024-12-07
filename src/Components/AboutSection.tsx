import React from "react";
import Image from "next/image";
import TeamCard from "./TeamCard";
import StatsCard from "./StatsCard";
import {
  faHouse,
  faDollarSign,
  faBagShopping,
  faSackDollar,
  faTruck,
  faHeadphones,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

const AboutSection = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Text and Image Section */}
      <div className="sm:w-full md:w-[80%] my-11 flex sm:flex-col md:flex-row justify-center items-start gap-x-20 gap-y-6">
        {/* Left Section */}
        <div className="sm:w-full md:w-[60%] sm:p-8 md:p-0 mt-16">
          <h1 className="sm:text-xl md:text-3xl lg:text-5xl font-bold">
            Our Story
          </h1>
          <p className="pt-6">
            Launched in 2015, Exclusive is South Asia&apos;s premier online
            shopping marketplace with an active presence in Bangladesh.
            Supported by a wide range of tailored marketing, data, and service
            solutions, Exclusive has 10,500 sellers and 300 brands and serves 3
            million customers across the region.
          </p>
          <p className="mt-5">
            Exclusive has more than 1 Million products to offer, growing very
            fast. Exclusive offers a diverse assortment in categories ranging
            from consumer goods to electronics.
          </p>
        </div>
        {/* Right Section */}
        <div className="sm:w-full md:w-[600px] cursor-pointer">
          <Image
            src="/images/aboutImage.png"
            width={400}
            height={500}
            alt="About Image"
            className="w-full"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-wrap justify-center items-center gap-8 mt-20 mb-16">
        <StatsCard
          icon={faHouse}
          count="10.5k"
          text="Sellers active on our site"
        />
        <StatsCard
          icon={faDollarSign}
          count="33k"
          text="Monthly Product Sale"
          innerCircleColor="bg-black"
          outerCircleColor="bg-red-400"
          bgColor="bg-red-500"
          textColor="text-white"
        />
        <StatsCard
          icon={faBagShopping}
          count="45.5k"
          text="Customers active on our site"
        />
        <StatsCard
          icon={faSackDollar}
          count="25k"
          text="Annual gross sale on our site"
        />
      </div>

      {/* About Owner Section */}
      <div className="flex flex-wrap justify-center items-center gap-8 mt-20 mb-16">
        <div className="flex gap-5">
          <TeamCard
            imageSrc="/images/Cruise.png"
            name="Tom Cruise"
            designation="Founder and Chairman"
          />
          <TeamCard
            imageSrc="/images/Emma.png"
            name="Emma Watson"
            designation="Managing Director"
          />
          <TeamCard
            imageSrc="/images/Will.png"
            name="Will Smith"
            designation="Product Designer"
          />
        </div>
      </div>
      {/* Delivery Section */}
      <div className="flex flex-wrap justify-center items-center gap-8 mt-20 mb-16">
        <StatsCard
          icon={faTruck}
          count="FREE AND FAST DELIVERY"
          text="Free delivery for orders over $140"
          borderStyle="border-none"
          headingTextSize="2xl"
        />
        <StatsCard
          icon={faHeadphones}
          count="24/7 CUSTOMER SERVICE"
          text="Friendly 24/7 customer support"
          borderStyle="border-none"
          headingTextSize="2xl"
        />
        <StatsCard
          icon={faCheckCircle}
          count="MONEY BACK GUARANTEE"
          text="We reurn money within 30 days"
          borderStyle="border-none"
          headingTextSize="2xl"
        />
      </div>
    </div>
  );
};

export default AboutSection;
