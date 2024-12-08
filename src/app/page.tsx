import HeroSection from "@/Components/HeroSection";
import Freshsales from "@/Components/EditorPick";
import Featured from "@/Components/Featured"
import ClassicProduct from "@/Components/ClassicProduct"
import Universe from "@/Components/Universe";
import FeaturedPost from "@/Components/FeaturedPost";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Freshsales />
      <Featured/>
      <ClassicProduct/>
      <Universe/>
      <FeaturedPost/>
    </div>
  );
};

export default page;
