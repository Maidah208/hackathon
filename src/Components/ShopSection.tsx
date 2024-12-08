import ItemCard from "./ItemCard";

const BestSelling = () => {
  return (
    <div className="mx-5 sm:mx-14 lg:mx-24">
      {/* Section for Featured Products */}
      <div className="gap-4 flex flex-col items-center justify-center mb-4 text-center">
        <p className="text-gray-500 font-bold text-xl">Featured Products</p>
        <div className="text-2xl font-bold">BESTSELLER PRODUCTS</div>
        <div className="text-gray-500 text-lg my-4">
          Problems trying to resolve the conflict between
        </div>
      </div>

      {/* Cards Section - Responsive grid */}
      <div className="grid grid-cols-1 gap-6 my-8 justify-items-center sm:grid-cols-2 lg:grid-cols-4">
        <ItemCard />
        <ItemCard
          imageSrc="/images/featured (2).jpeg"
          title="Graphic Design"
          price={960}
          originalPrice={1160}
        />
        <ItemCard
          imageSrc="/images/featured (3).jpeg"
          title="Graphic Design"
          price={375}
          originalPrice={400}
        />
        <ItemCard
          imageSrc="/images/featured (4).jpeg"
          title="Graphic Design"
          price={370}
          originalPrice={400}
        />
      </div>
      <div className="grid grid-cols-1 gap-6 my-8 justify-items-center sm:grid-cols-2 lg:grid-cols-4">
        <ItemCard />
        <ItemCard
          imageSrc="/images/featured (2).jpeg"
          title="Graphic Design"
          price={960}
          originalPrice={1160}
        />
        <ItemCard
          imageSrc="/images/featured (3).jpeg"
          title="Graphic Design"
          price={375}
          originalPrice={400}
        />
        <ItemCard
          imageSrc="/images/featured (4).jpeg"
          title="Graphic Design"
          price={370}
          originalPrice={400}
        />
      </div>
    </div>
  );
};

export default BestSelling;
