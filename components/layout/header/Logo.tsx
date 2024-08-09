import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className=" flex pl-[54px] pr-[5px] justify-center text-center ">
      <Image src="./images/logo.svg" width={50} height={32} alt="" />
      <p className="text-[34px]">Furniro</p>
    </div>
  );
};

export default Logo;
