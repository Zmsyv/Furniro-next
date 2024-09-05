import Image from "next/image";
import React from "react";

interface ITags {
  isNew: boolean;
  isDiscount: boolean;
  discount: number;
}

interface IProduct {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
  total: number;
  tags: ITags;
}

const ProductHeader = ({ item }: { item: IProduct }) => {
  return (
    // <Link  href="single-product">
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
      <div className="  flex justify-center items-center w-[100%] h-[100%] ">
        <div className="relative h-[400px] w-full ">
          <Image src={item.src} fill alt={item.alt} className="object-fill"  />
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default ProductHeader;
