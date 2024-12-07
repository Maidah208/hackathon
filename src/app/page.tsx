import HeroSection from "@/Components/HeroSection";
import Freshsales from "@/Components/Freshsales";
import Categories from "@/Components/Categories";
import Music from "@/Components/Music";
import BestSelling from "@/Components/BestSelling"
import OurProducts from "@/Components/OurProducts";
import Featured from "@/Components/Featured"
import StatsCard from "@/Components/StatsCard";
import { faTruck, faHeadphones, faCheckCircle} from "@fortawesome/free-solid-svg-icons";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Freshsales />
      <Categories/>
      <BestSelling/>
      <Music/>
      <OurProducts/>
      <Featured/>
      {/* Delivery Section */}
      <div className="flex flex-wrap justify-center items-center gap-8 mt-20 mb-16">
        <StatsCard
          icon={faTruck}
          count="FREE AND FAST DELIVERY"
          text="Free delivery for orders over $140"
          borderStyle="border-none"
          headingTextSize="2xl"
        />
        <StatsCard
          icon={faHeadphones}
          count="24/7 CUSTOMER SERVICE"
          text="Friendly 24/7 customer support"
          borderStyle="border-none"
          headingTextSize="2xl"
        />
        <StatsCard
          icon={faCheckCircle}
          count="MONEY BACK GUARANTEE"
          text="We reurn money within 30 days"
          borderStyle="border-none"
          headingTextSize="2xl"
        />
      </div>
    
    </div>
  );
};

export default page;
