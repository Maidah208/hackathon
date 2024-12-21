import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="w-full relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heroImage.jpg"
          alt="Hero Image"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-start text-white px-6 sm:px-12 lg:px-36 z-10 text-center lg:text-left">
        <p className="uppercase font-semibold tracking-wide text-sm sm:text-base md:text-lg">
          Summer 2020
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold my-4 sm:my-5 lg:my-7">
          NEW COLLECTION
        </h1>
        <p className="text-lg sm:text-xl mb-4 sm:mb-5 leading-relaxed max-w-lg">
          We know how large objects will act, <br />
          but things on a small scale.
        </p>
        <Link
          href="#"
          className="bg-[#2DC071] text-white px-6 py-3 rounded-lg text-sm sm:text-base font-semibold uppercase tracking-wide hover:bg-green-700 transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;
