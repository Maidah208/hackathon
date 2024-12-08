import React from "react";
import Image from "next/image";

const EditorPick = () => {
  return (
    <div className="my-24 mx-44 text-center flex flex-col items-center justify-center">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">EDITOR’S PICK</h1>
        <p className="text-md mt-4 text-gray-600">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Image Layout */}
      <div className="flex flex-col md:flex-row gap-5">
        {/* First Image */}
        <div className="relative">
          <Image
            src={"/images/editior (4).png"}
            alt="Image 1"
            height={300}
            width={517}
            className=""
          />
          <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 text-sm font-semibold">
            Men
          </button>
        </div>

        {/* Second Column for Images (Flexing based on screen size) */}
        <div className="flex flex-col md:flex-row gap-5">
          {/* Second Image */}
          <div className="relative">
            <Image
              src={"/images/editior (1).png"}
              alt="Image 2"
              height={300}
              width={617}
              className="object-cover object-top h-[380px] w-[517px]"
            />
            <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 text-sm font-semibold">
              Women
            </button>
          </div>

          {/* Third and Fourth Images */}
          <div className="space-y-6">
            {/* Third Image */}
            <div className="relative">
              <Image
                src={"/images/editior (2).png"}
                alt="Image 3"
                height={239}
                width={242}
                className=""
              />
              <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 text-sm font-semibold">
                Accessories
              </button>
            </div>

            {/* Fourth Image */}
            <div className="relative">
              <Image
                src={"/images/editior (3).png"}
                alt="Image 4"
                height={219}
                width={242}
                className=""
              />
              <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 text-sm font-semibold">
                Kids
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPick;
