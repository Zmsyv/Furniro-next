import React from "react";
import ProductList from "./ProductList";

const OurProductMain = () => {
  return (
    <>
      <h2 className="text-[40px] text-center pb-[32px] font-bold px-8 sm:px-0">
        Our Products
      </h2>
      <div className="flex  justify-center px-[10px]">
        <ProductList />
      </div>
    </>
  );
};

export default OurProductMain;
