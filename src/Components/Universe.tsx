import Image from "next/image";

const Universe = () => {
  return (
    <main>
      <div className="w-full bg-white flex flex-col lg:flex-row gap-10 px-4 sm:px-8 lg:px-24 py-10 lg:py-16 justify-center items-center lg:items-start">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative">
            <Image
              src="/images/univers.png"
              alt="Universe Image"
              className="object-cover object-center rounded-lg"
              width={400}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 space-y-5 text-center lg:mt-16 lg:text-left">
          <h5 className="text-gray-400 text-sm sm:text-base font-bold">
            SUMMER 2020
          </h5>
          <h2 className="text-[#252B42] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            Part of the Neural Universe
          </h2>
          <h4 className="text-[#737373] text-sm sm:text-base lg:text-lg leading-relaxed">
            We know how large objects will act, <br />
            but things on a small scale.
          </h4>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
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
