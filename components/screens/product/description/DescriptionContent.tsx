import Link from "next/link";
import React from "react";

const DescriptionContent = () => {
  return (
    <div>
      <div className="flex gap-[53px] justify-center pb-[37px] text-light px-[207px]">
        <Link href="">
          <h2 className=" text-black font-bold ">Description</h2>
        </Link>
        <Link href="">
          <h2>Additional Information</h2>
        </Link>
        <Link href="">
          <h2>Reviews [5]</h2>
        </Link>
      </div>
    </div>
  );
};

export default DescriptionContent;
