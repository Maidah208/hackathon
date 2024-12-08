import Image from "next/image";
import ItemCard from "./ItemCard";

const CartSection = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-10">
        {/* Cart Header */}
        <div className="flex justify-between items-center mb-8 flex-col sm:flex-row">
          <h1 className="text-3xl font-bold">My Cart</h1>
          <button className="mt-4 sm:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Checkout
          </button>
        </div>

        {/* Cart Items */}
        <div className="space-y-6 mx-8 sm:mx-32">
          <div className="flex flex-col sm:flex-row items-start border-b pb-6">
            {/* Left Section: Product Image */}
            <div className="flex-shrink-0 w-full sm:w-1/2 mb-6 sm:mb-0">
              <Image
                src="/images/product.png"
                alt="Floating Phone"
                height={400}
                width={400}
                className="object-cover rounded-lg mx-auto sm:mx-0"
              />
            </div>

            {/* Right Section: Title, Description, and Quantity */}
            <div className="ml-0 sm:ml-6 space-y-4 w-full sm:w-1/2">
              <p className="text-2xl font-bold">Floating Phone</p>
              <p className="text-gray-500 mb-4">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>

              {/* Quantity and Price */}
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  value="1"
                  className="w-16 p-2 border rounded-lg text-center"
                />
                <p className="text-xl font-semibold">$49.98</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Total */}
        <div className="flex justify-center gap-4 items-center mt-8">
          <p className="text-xl font-semibold">Total</p>
          <p className="text-xl font-semibold">$49.98</p>
        </div>

        {/* More Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">More Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-6">
            {/* Product 1 */}
            <div className="overflow-hidden">
              <ItemCard
                imageSrc="/images/featured (2).jpeg"
                title="Graphic Designer"
                price={960}
                originalPrice={1160}
              />

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Add to Cart
              </button>
            </div>

            {/* Product 2 */}
            <div className="overflow-hidden">
              <ItemCard
                imageSrc="/images/featured (3).jpeg"
                title="Graphic Designer"
                price={960}
                originalPrice={1160}
              />

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Add to Cart
              </button>
            </div>

            {/* Product 3 */}
            <div className="overflow-hidden">
              <ItemCard
                imageSrc="/images/featured (4).jpeg"
                title="Graphic Designer"
                price={960}
                originalPrice={1160}
              />

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
