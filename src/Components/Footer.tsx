import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#FAFAFA] h-auto px-8 py-6">
        <div className="text-black text-2xl font-bold mb-4 md:mb-0">Bondage</div>
        <div className="flex space-x-4 mb-4 md:mb-0 justify-center md:justify-start">
          <FontAwesomeIcon icon={faFacebook} className="text-2xl text-[#23A6F0]" />
          <FontAwesomeIcon icon={faTwitter} className="text-2xl text-[#23A6F0]" />
          <FontAwesomeIcon icon={faYoutube} className="text-2xl text-[#23A6F0]" />
        </div>
      </div>

      {/* Main Footer Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 py-16 px-6 md:px-20 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h1 className="font-bold text-xl mb-4">Company Info</h1>
          <ul className="space-y-2">
            <li className="cursor-pointer text-sm md:text-base">About Us</li>
            <li className="cursor-pointer text-sm md:text-base">Careers</li>
            <li className="cursor-pointer text-sm md:text-base">Our Team</li>
            <li className="cursor-pointer text-sm md:text-base">Press</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h1 className="font-bold text-xl mb-4">Legal</h1>
          <ul className="space-y-2">
            <li className="cursor-pointer text-sm md:text-base">Privacy Policy</li>
            <li className="cursor-pointer text-sm md:text-base">Terms of Service</li>
            <li className="cursor-pointer text-sm md:text-base">Cookie Policy</li>
            <li className="cursor-pointer text-sm md:text-base">Accessibility</li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h1 className="font-bold text-xl mb-4">Features</h1>
          <ul className="space-y-2">
            <li className="cursor-pointer text-sm md:text-base">Live Chat</li>
            <li className="cursor-pointer text-sm md:text-base">Custom Orders</li>
            <li className="cursor-pointer text-sm md:text-base">Mobile App</li>
            <li className="cursor-pointer text-sm md:text-base">Discount Program</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h1 className="font-bold text-xl mb-4">Resources</h1>
          <ul className="space-y-2">
            <li className="cursor-pointer text-sm md:text-base">Blog</li>
            <li className="cursor-pointer text-sm md:text-base">Help Center</li>
            <li className="cursor-pointer text-sm md:text-base">Community</li>
            <li className="cursor-pointer text-sm md:text-base">Tutorials</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h1 className="font-bold text-xl mb-4">Get in Touch</h1>
          <p className="mb-4 text-sm md:text-base">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="flex items-center border border-gray-600 rounded-md overflow-hidden mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Your email"
              className="text-zinc-400 px-4 py-2 w-full outline-none"
            />
            <button
              type="submit"
              className="bg-[#23A6F0] text-white px-4 py-2 hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer Bottom */}
      <p className="bg-[#FAFAFA] pl-6 md:pl-28 text-sm py-4 text-center md:text-left">
        Made With Love By Finland All Rights Reserved
      </p>
    </>
  );
};

export default Footer;
