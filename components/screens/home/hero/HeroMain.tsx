import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroMain = () => {
  return (
    <div className="bg-light h-[720px] pl-[50%] pt-[90px] max-sm:pl-[25%] sm:pl-[25%] md:pl-[35%] lg:pl-[50%]   ">
      <div className=" bg-lightOrange1 w-[80%] h-[70%] pl-[41px]  ">
        <h3 className="text-[16px] font-bold pt-[62px]">New Arrival</h3>
        <h2 className="text-[52px] font-bold text-orange pb-[17px]">Discover Our New Collection</h2>
        <p className="text-[18px] pb-[46px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <div>
        <Button
          variant="outline"
          className=" w-[245px] sm:w-10 md:w-24 lg:w-40 xl:w-60 text-orange border-orange "
        >
          <p>Show More</p>
        </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
