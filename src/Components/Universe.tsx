import Image from "next/image";

const Universe = () => {
  return (
    <main>
      <div className="w-full bg-white flex flex-col lg:flex-row px-5 lg:px-48 py-12 justify-center items-center lg:items-start lg:space-y-0">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative">
            <Image
              src="/images/univers.png"
              alt="Universe Image"
              height={500}
              width={500}
              className="w-full max-w-[500px] lg:w-[400px] lg:h-[400px] object-cover object-center"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 space-y-5 py-10 px-5 lg:px-10 mt-8 lg:mt-0">
          <h5 className="text-gray-400 text-sm lg:text-base font-bold mb-3">
            SUMMER 2020
          </h5>
          <h2 className="text-[#252B42] text-xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
            Part of the Neural Universe
          </h2>
          <h4 className="text-[#737373] text-sm sm:text-base lg:text-lg leading-6 mb-6">
            We know how large objects will act, <br />
            but things on a small scale.
          </h4>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#2DC071] text-white rounded px-6 py-3 hover:bg-white hover:text-[#2DC071] hover:border hover:border-[#2DC071] transition-all duration-300">
              BUY NOW
            </button>
            <button className="bg-[#2DC071] text-white rounded px-6 py-3 hover:bg-white hover:text-[#2DC071] hover:border hover:border-[#2DC071] transition-all duration-300">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Universe;
