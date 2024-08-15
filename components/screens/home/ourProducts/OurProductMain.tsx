import React from "react";
import ProductList from "./ProductList";

const OurProductMain = () => {
  return (
    <div className="  sm:px-[102px] pt-[55px]  min-[320px]: px-10  ">
      <h2 className=" text-[40px] text-center pb-[32px] font-bold">
        Our Products
      </h2>
      <div className="">
        <ProductList />
      </div>
    </div>
  );
};

export default OurProductMain;
