import Image from "next/image";
import Link from "next/link";

function Login() {
  return (
    <div className="w-full flex justify-between items-start gap-16 mb-56">
      {/* Left Section */}
      <div className="w-[60%] h-screen flex items-center">
        <Image
          src={"/images/SideImage.png"}
          width={800}
          height={800}
          alt="Mobile"
          className="w-full h-full object-cover mt-32"
        />
      </div>
      {/* Right Section */}
      <div className="w-[450px] h-screen flex flex-col justify-center items-center px-8 mr-20">
        <div className="w-full">
          <h1 className="text-3xl font-bold">Log in to Exclusive</h1>
          <p className="text-sm pt-2">Enter your details below</p>
          <form action="" className="mt-5">
            <label htmlFor="email" className="sr-only">
              Email or Phone
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email or Phone Number"
              className="py-2 px-4 w-full mt-5 bg-transparent border-b-2"
            />
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="py-2 px-4 w-full mt-5 bg-transparent border-b-2"
            />
            <div className="flex items-center justify-between mt-5">
              <button
                type="submit"
                className="py-2 px-8 bg-red-600 hover:bg-red-700 text-white rounded transition-all ease-in-out duration-300"
              >
                Login
              </button>
              <p className="text-red-600 opacity-85 cursor-pointer hover:underline">
                Forget Password?
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
