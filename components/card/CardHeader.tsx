import Image from "next/image";
import React from "react";

const CardHeader = () => {
  return (
    <div className=" relative">
      <div className="bg-red rounded-full w-14 h-14 absolute top-[10px] left-[220px] z-10 ">
      <p className=" flex text-center justify-center items-center pt-4 ">-50%</p>
      </div >
      <div className="">
      <Image
        src="./images/lamb.svg"
        width={285}
        height={301}
        alt="Picture of the author"
      />
      </div>
      
    </div>
  );
};

export default CardHeader;
