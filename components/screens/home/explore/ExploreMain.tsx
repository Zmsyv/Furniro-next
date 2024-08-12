import { Button } from "@/components/ui/button";
import React from "react";

const ExploreMain = () => {
  return (
    <div className="bg-lightOrange1 h-[670px] mt-[69px] ">
      <div className=" ml-[100px] pt-[223px] sm:w-64 md:w-80 xl:w-max">
      <h2 className="font-bold text-[40px]">50+ Beautiful rooms inspiration</h2>
      <p className="text-light">
        Our designer already made a lot of beautiful prototipe of rooms that
        inspire you
      </p>
      <Button
        variant="outline"
        className=" mt-[25px] w-[245px] max-sm:w-8 sm:w-10 md:w-24 lg:w-40 xl:w-60 text-white border-orange bg-orange "
      >
        <p>Explore More</p>
      </Button>
      </div>
    </div>
  );
};

export default ExploreMain;
