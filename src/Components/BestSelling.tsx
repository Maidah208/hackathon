import ItemCard from "./ItemCard";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons"; 

const BestSelling = () => {
  return (
    <div className="mx-16">
      <div className="flex text-red-600 gap-4 items-center mb-4">
        <div className="bg-red-600 w-4 h-6 rounded"></div>
        <p className="font-bold text-xl">This Month</p>
      </div>
      <div className="flex gap-12 items-center">
        <div className="text-2xl font-bold">Best Selling Product</div>{" "}
      </div>
      <div className="flex my-8 space-x-6 items-center justify-center">
        <ItemCard />
        <ItemCard
          imageSrc="/images/keyboard.png"
          rating={4} // 3 stars yellow, 2 stars grey
          title="AK-900 Wired Keyboard"
          price={960}
          originalPrice={1160}
          icons={[
            { icon: faHeart, color: "text-red-700" },
            { icon: faEye, color: "text-black" },
          ]}
        />
        <ItemCard
          imageSrc="/images/chair.png"
          rating={4} // 3 stars yellow, 2 stars grey
          title="S-Series Comfort Chair "
          price={375}
          originalPrice={400}
          icons={[
            { icon: faHeart, color: "text-red-700" },
            { icon: faEye, color: "text-black" },
          ]}
        />
        <ItemCard
          imageSrc="/images/tv.png"
          rating={2} // 3 stars yellow, 2 stars grey
          title="IPS LCD Gaming Monitor"
          price={370}
          originalPrice={400}
          icons={[
            { icon: faHeart, color: "text-red-700" },
            { icon: faEye, color: "text-black" },
          ]}
        />
      </div>
    </div>
  );
};

export default BestSelling;
