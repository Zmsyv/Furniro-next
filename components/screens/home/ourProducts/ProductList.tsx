import CardMain from "@/components/card/CardMain";
import { Button } from "@/components/ui/button";
import React from "react";
import ProductListItem from "./ProductListItem";

const productData = [{}];

const ProductList = () => {
  return (
    <>
      <div className="">
        <ProductListItem />
      </div>
      <div className=" pt-[20px]  flex justify-center items-center text-center">
        <Button
          variant="outline"
          className=" w-[245px] sm:w-10 md:w-24 lg:w-40 xl:w-60 text-orange border-orange "
        >
          <p>Show More</p>
        </Button>
      </div>
    </>
  );
};

export default ProductList;
