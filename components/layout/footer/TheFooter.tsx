import React from "react";
import Links from "./Links";
import Help from "./Help";
import Letter from "./Letter";
import Furniro from "./Furniro";

const TheFooter = () => {
  return (
    <>
      <div className="flex gap-[144px] pl-[100px] pr-[207px] max-sm:flex-wrap  sm:flex-wrap md:flex-wrap">
        <Furniro />
        <Links />
        <Help />
        <Letter />
      </div>
      <div className="ml-[100px] mr-[207px]">
        <hr />
        <p className="pt-[35px]">2023 furniro. All rights reserved.</p>
      </div>
    </>
  );
};

export default TheFooter;
