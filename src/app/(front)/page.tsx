"use client";
import Video from "@/components/Video";
import FrontPageCards from "@/components/FrontPageCards";

import * as React from "react";

const Home: React.FC = () => {
  return (
    // Home page
    <div>
      {/* Square */}
      <div className="m-auto flex justify-center">
        <div className="h-[100vh] w-[100%] bg-primary-foreground rounded-[2rem]">
          {/* Video */}

          <Video></Video>
        </div>
      </div>

      {/* Cards */}

      <FrontPageCards />
    </div>
  );
};

export default Home;
