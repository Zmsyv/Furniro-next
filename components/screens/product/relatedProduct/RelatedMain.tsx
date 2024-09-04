import React from "react";
import RelatedList from "./RelatedList";

const RelatedMain = () => {
  return (
    <>
      <h2 className=" text-[40px] text-center pb-[32px] pt-[56px] font-bold px-8 sm:px-0">
        Related Products
      </h2>
      <div className=" flex  justify-center px-[10px]">
        <RelatedList />
      </div>
    </>
  );
};

export default RelatedMain;
