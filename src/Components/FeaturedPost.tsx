import React from "react";
import FeaturedPostCard from "./FeaturedPostCard";

const FeaturedPost = () => {
  return (
    <div>
      {/* Heading Section */}
      <div className="gap-4 flex flex-col items-center justify-center mb-4">
        <p className="text-[#23A6F0] font-bold text-xl">Practice Advice</p>
        <div className="text-4xl font-bold">Featured Posts</div>
        <div className="text-gray-500 text-lg my-4 text-center">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </div>
      </div>

      {/* Featured Post Cards Section */}
      <div className="flex flex-wrap justify-center items-center gap-6 my-8">
        <FeaturedPostCard
          imageSrc="/images/featuredPost (1).jpeg"
          title="Loudest à la Madison #1 (L'integral)"
          description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
          date="22 April 2021"
          comments={10}
        />
        <FeaturedPostCard
          imageSrc="/images/featuredPost (2).jpeg"
          title="Loudest à la Madison #1 (L'integral)"
          description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
          date="22 April 2021"
          comments={10}
        />
        <FeaturedPostCard
          imageSrc="/images/featuredPost (3).jpeg"
          title="Loudest à la Madison #1 (L'integral)"
          description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
          date="22 April 2021"
          comments={10}
        />
      </div>
    </div>
  );
};

export default FeaturedPost;
