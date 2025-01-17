import { Button } from "@/components/ui/button";
import React from "react";
import ProductListItem from "./ProductListItem";

const productData = [{}];

const ProductList = () => {
  return (
    <div className=" flex flex-wrap justify-center  lg:px-[102px] ">
      <div>
        <ProductListItem />
      </div>
      <div className=" pt-[32px]  flex justify-center items-center  text-center w-[100%]">
        <Button
          variant="outline"
          className=" w-[245px]   sm:w-15 md:w-30 lg:w-45 xl:w-60 text-orange border-orange "
        >
          <p>Show More</p>
        </Button>
      </div>
    </div>
  );
};

export default ProductList;
