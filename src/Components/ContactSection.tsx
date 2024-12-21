import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faLocation,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-28 my-10 justify-center mx-8 text-black">
        {/* Contact Details */}
        <div className="space-y-4 py-28 lg:py-20 text-center lg:text-left">
          <p className="font-medium uppercase tracking-wide">Contact Us</p>
          <h1 className="text-4xl font-bold">Get in touch today!</h1>
          <p className="text-gray-500">
            We know how large objects will act, <br />
            but things on a small scale can often be unpredictable.
          </p>
          <div className="space-y-2">
            <p className="font-medium">Phone: +451 215 215</p>
            <p className="font-medium">Fax: +451 215 215</p>
          </div>
          <div className="flex justify-center lg:justify-start space-x-6 mt-4">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="hover:text-blue-800 cursor-pointer text-gray-500"
              size="2x"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="hover:text-blue-800 cursor-pointer text-gray-500"
              size="2x"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:text-blue-800 cursor-pointer text-gray-500"
              size="2x"
            />
          </div>
        </div>

        {/* Contact Image */}
        <div className="mt-8 lg:mt-0">
          <Image
            src="/images/contactImage.png"
            alt="Contact Us"
            height={600}
            width={400}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Visit our office */}
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold">VISIT OUR OFFICE</p>
        <h1 className="font-bold text-4xl">
          We help small businesses with big ideas
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 py-11">
          {/* Card 1 */}
          <div className="group max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6 space-y-4 text-center transition duration-300 hover:bg-[#252B42] hover:text-white cursor-pointer">
            <div className="text-blue-600 group-hover:text-white py-11">
              <FontAwesomeIcon icon={faPhone} size="4x" />
            </div>
            <div className="space-y-2">
              <p className="text-gray-800 group-hover:text-white font-medium">
                georgia.young@example.com
              </p>
              <p className="text-gray-800 group-hover:text-white font-medium">
                georgia.young@ple.com
              </p>
            </div>
            <p className="text-gray-600 group-hover:text-white font-bold">
              Get Support
            </p>
            <button className="bg-transparent text-blue-600 px-4 py-2 rounded-full border border-blue-600">
              Submit Request
            </button>
          </div>

          {/* Card 2 */}
          <div className="group max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6 space-y-4 text-center transition duration-300 hover:bg-[#252B42] hover:text-white cursor-pointer">
            <div className="text-blue-600 group-hover:text-white py-11">
              <FontAwesomeIcon icon={faLocation} size="4x" />
            </div>
            <div className="space-y-2">
              <p className="text-gray-800 group-hover:text-white font-medium">
                georgia.young@example.com
              </p>
              <p className="text-gray-800 group-hover:text-white font-medium">
                georgia.young@ple.com
              </p>
            </div>
            <p className="text-gray-600 group-hover:text-white font-bold">
              Get Support
            </p>
            <button className="bg-transparent text-blue-600 px-4 py-2 rounded-full border border-blue-600">
              Submit Request
            </button>
          </div>

          {/* Card 3 */}
          <div className="group max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6 space-y-4 text-center transition duration-300 hover:bg-[#252B42] hover:text-white cursor-pointer">
            <div className="text-blue-600 group-hover:text-white py-11">
              <FontAwesomeIcon icon={faEnvelope} size="4x" />
            </div>
            <div className="space-y-2">
              <p className="text-gray-800 group-hover:text-white font-medium">
                georgia.young@example.com
              </p>
              <p className="text-gray-800 group-hover:text-white font-medium">
                georgia.young@ple.com
              </p>
            </div>
            <p className="text-gray-600 group-hover:text-white font-bold">
              Get Support
            </p>
            <button className="bg-transparent text-blue-600 px-4 py-2 rounded-full border border-blue-600">
              Submit Request
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 pt-20">
        <p className="text-lg font-medium text-gray-600">
          We Can&apos;t Wait To Meet You
        </p>
        <h1 className="text-4xl font-bold text-gray-800">Let&apos;s Talk</h1>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300">
          Try It Now
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
