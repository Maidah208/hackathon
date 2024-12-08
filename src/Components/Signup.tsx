import Image from "next/image";
import Link from "next/link";

function Signup() {
  return (
    <div className="w-full flex justify-between items-start gap-16 mb-56">
      {/* Left Section */}
      <div className="w-[60%] h-screen flex items-center">
        <Image
          src={"/images/SideImage.png"}
          width={800}
          height={800}
          alt="Mobile"
          className="w-full h-[full] object-cover mt-32"
        />
      </div>
      {/* Right Section */}
      <div className="w-[550px] h-screen flex flex-col justify-center items-center px-8 mr-20">
        <div className="w-full">
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-sm pt-2">Enter your details below</p>
          <form action="" className="mt-5">
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="py-2 px-4 w-full mt-5 bg-transparent border-b-2"
            />
            <label htmlFor="email" className="sr-only">Email or Phone</label>
            <input
              id="email"
              type="email"
              placeholder="Email or Phone Number"
              className="py-2 px-4 w-full mt-5 bg-transparent border-b-2"
            />
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="py-2 px-4 w-full mt-5 bg-transparent border-b-2"
            />
            <button
              type="submit"
              className="py-2 px-4 w-full mt-5 bg-blue-600 text-white rounded-sm transition-all ease-in-out duration-300"
            >
              Create Account
            </button>
          </form>
          <div className="border border-black text-black flex items-center justify-center px-3 w-full h-[45px] mt-3">
            <Image
              src="/images/Icon-Google.png"
              alt="Google Play Store"
              height={20}
              width={20}
              className="h-[20px] w-[20px] mr-2"
            />
            <div className="text-black text-xs">
              <p className="leading-tight">Sign up with Google</p>
            </div>
          </div>
          <div className="flex pt-8 items-center justify-center gap-2">
            <p className="text-black opacity-85">Already have account?</p>
            <Link href="/signup/login"><span className="border-b border-zinc-500 text-blue-600 cursor-pointer">Log in</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
