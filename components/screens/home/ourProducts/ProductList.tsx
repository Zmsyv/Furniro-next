import CardMain from "@/components/card/CardMain";
import { Button } from "@/components/ui/button";
import React from "react";
import ProductListItem from "./ProductListItem";

const productData = [{}];

const ProductList = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-[32px] ">
        <ProductListItem />
      </div>
      <div className=" pt-[20px]  flex justify-center items-center text-center">
        <Button
          variant="outline"
          className=" w-[245px] text-orange border-orange "
        >
          <p>Show More</p>
        </Button>
      </div>
    </>
  );
};

export default ProductList;
