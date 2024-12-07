import Link from "next/link";
import Image from "next/image";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faFacebook, } from '@fortawesome/free-brands-svg-icons'; // Social icons
import { faArrowRight, faCopyright, faQrcode } from '@fortawesome/free-solid-svg-icons'; // Social icons

const Footer = () => {
  return (
    <>
    <section className="grid grid-cols-5 bg-black text-white py-16 px-20 mb-34">
        <div>
            <h1 className="font-bold text-xl px-5 mb-4">Exclusive</h1>
            <ul className="px-7 space-y-2">
              <li className="pt-2 cursor-pointer">Subscribe</li>
              <li className="pt-2 cursor-pointer">Get 10% off your first order</li>
              <li className="mt-3 cursor-pointer py-1 border flex justify-center">
                <input type="text" placeholder="Enter your Email" className="bg-black border-none text-white py-1 px-2 w-full" />
                <FontAwesomeIcon icon={faArrowRight} className="text-xl sm:hidden md:block justify-between" />
              </li>
            </ul>
        </div>
        <div>
            <h1 className="font-bold text-xl px-8 mb-4">Support</h1>
            <ul className="px-7 space-y-2">
              <li className="pt-1 cursor-pointer">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li className="pt-1 cursor-pointer">exclusive@gmail.com</li>
              <li className="pt-1 cursor-pointer">+88015-88888-9999</li>
            </ul>
        </div>
        <div>
            <h1 className="font-bold text-xl px-7 mb-4">Account</h1>
            <ul className="px-7 space-y-2">
              <li className="pt-1 cursor-pointer">My Account</li>
              <li className="pt-1 cursor-pointer">Login / Register</li>
              <li className="pt-1 cursor-pointer">Cart</li>
              <li className="pt-1 cursor-pointer">Wishlist</li>
              <li className="pt-1 cursor-pointer">Shop</li>
            </ul>
        </div>
        <div>
            <h1 className="font-bold text-xl px-5 mb-4">Quick Link</h1>
            <ul className="px-5 space-y-2">
              <li className="pt-1 cursor-pointer">Privacy Policy</li>
              <li className="pt-1 cursor-pointer">Terms Of Use</li>
              <li className="pt-1 cursor-pointer">FAQ</li>
              <li className="pt-1 cursor-pointer">Contact</li>
            </ul>
        </div>
        <div>
            <h1 className="font-bold text-xl pb-4">Social Links</h1>
            <p> Save $3 with App New User Only </p>
            <section className="flex">
            <div>
                <FontAwesomeIcon icon={faQrcode} className="text-8xl mb-8 mr-5" />
            </div>
            <div>
            <div className="flex flex-col sm:flex-column mt-2 gap-3 justify-center">
            <div className="bg-black border border-white flex flex-row px-3 w-[107px] h-[35px]">
              <Image
                src="/images/GPlayStoreLogo.png"
                alt="Google PlayStore"
                height={20}
                width={20}
                className="h-[20px] w-[20px] mt-[6px] mr-1"
              />
              <div className="text-white text-[9px] mt-1">
                <p className="font-bold">GET IT ON</p>
                <p>GOOGLE PLAY</p>
              </div>
            </div>
            <div className="bg-black border border-white flex flex-row px-2 w-[107px] h-[35px]">
              <Image
                src="/images/AppleLogo.png"
                alt="Apple"
                height={16}
                width={16}
                className="h-[16px] w-[16px] mt-[8px] mr-1"
              />
              <div className="text-white text-[9px] mt-1">
                <p>Available on the</p>
                <p className="font-bold">Apple Store</p>
              </div>
            </div>
          </div>
            </div>  
            </section>
            <div>
            <ul className="list-none flex gap-x-3 justify-center sm:justify-start">
              <li>
                <Link href="https://www.youtube.com/@MsNIMRA" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} className="text-3xl mr-2 transition duration-200 ease-out hover:scale-105 hover:ease-in" />
                </Link>
              </li>

              <li>
                <Link href="https://www.linkedin.com/in/nimra-talha-7691a21a3/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="text-3xl mr-2 transition duration-200 ease-out hover:scale-105 hover:ease-in" />
                </Link>
              </li>

              
              <li>
                <Link href="https://www.facebook.com/NimraTalha123" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="text-3xl mr-2 transition duration-200 ease-out hover:scale-105 hover:ease-in" />
                </Link>
              </li>
              
            </ul>
            </div>
        </div>
    </section>
        <p className="border-t border-gray-600 bg-black text-gray-600 text-center text-sm pb-4"><FontAwesomeIcon icon={faCopyright} className="text-sm mt-5 mr-3" /> Copyright Rimel 2022. All rights reserved</p>
    </>
  )
}
export default Footer


