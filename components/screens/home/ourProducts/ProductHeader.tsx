import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductHeader = ({ item }) => {
  return (
    <div>
      <div className=" relative ">
        <div className="flex  items-center p-4 gap-2 absolute top-3 right-3 z-10 ">
          {item.tags.isDiscount && (
            <div className="bg-red rounded-full w-11 h-11 flex items-center justify-center ">
              -{item.tags.discount}%
            </div>
          )}
          {item.tags.isNew && (
            <div className="bg-blue rounded-full w-11 h-11 flex items-center justify-center   ">
              New
            </div>
          )}
        </div>
      </div>
      <div className="  flex justify-center items-center w-[100%] h-[100%]">
        <div className="relative ">
          <Image src={item.src} fill alt={item.alt} />
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
