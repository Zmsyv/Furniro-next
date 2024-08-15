import CardTags from "@/components/card/CardTags";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductFooter from "./ProductFooter";
import ProductHeader from "./ProductHeader";

const productData = [
  {
    id: 1,
    src: "./images/chair.svg",
    alt: "",
    title: "Syltherine",
    category: "Stylish cafe chair",
    total: 3500000,
    tags: {
      isNew: false,
      isDiscount: true,
      discount: 30,
    },
  },
  {
    id: 2,
    src: "./images/chair.svg",
    alt: "",
    title: "Leviosa",
    category: "Stylish cafe chair",
    total: 1500000,
    tags: {
      isNew: false,
      isDiscount: false,
      discount: 0,
    },
  },
  {
    id: 3,
    src: "./images/sofa.svg",
    alt: "",
    title: "Lolito",
    category: "Luxury big sofa",
    total: 7000000,
    tags: {
      isNew: false,
      isDiscount: true,
      discount: 50,
    },
  },
  {
    id: 4,
    src: "./images/table.svg",
    alt: "",
    title: "Respira",
    category: "Outdoor bar table and stool",
    total: 500000,
    tags: {
      isNew: true,
      isDiscount: false,
      discount: 0,
    },
  },
  {
    id: 5,
    src: "./images/chair.svg",
    alt: "",
    title: "Grifo",
    category: "Night lamp",
    total: 1500000,
    tags: {
      isNew: false,
      isDiscount: false,
      discount: 0,
    },
  },
  {
    id: 6,
    src: "./images/mug.svg",
    alt: "",
    title: "Muggo",
    category: "Small mug",
    total: 150000,
    tags: {
      isNew: true,
      isDiscount: false,
      discount: 0,
    },
  },
  {
    id: 7,
    src: "./images/bed.svg",
    alt: "",
    title: "Pinkgy",
    category: "Cute bed set",
    total: 7000000,
    tags: {
      isNew: false,
      isDiscount: true,
      discount: 50,
    },
  },
  {
    id: 8,
    src: "./images/pot.svg",
    alt: "",
    title: "Potty",
    category: "Minimalist flower pot",
    total: 500000,
    tags: {
      isNew: true,
      isDiscount: true,
      discount: 50,
    },
  },
];

const ProductListItem = () => {
  return (
    <>
      <ul className=" grid grid-cols-4 gap-[32px] max-sm:grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {productData.map((item) => (
          <li className=" w-[285px] h-[446px]" key={item.id}>
            <div className="relative">
            <ProductHeader item={item} />
            <ProductFooter item={item} />
            <div className="absolute  w-[100%] h-[100%] top-0 left-0 bg-boldgray flex justify-center items-center flex-col opacity-0 ease-in duration-100 hover:opacity-70 ">
                    <Button
                      variant="outline"
                      className=" w-[50%] sm:w-10 md:w-24 lg:w-40 xl:w-60 text-orange border-orange "
                    >
                      <p>Add to cart</p>
                    </Button>
                    <div className=" flex text-[16px] text-white pt-4  gap-4 ">
                      <Link href="/share" ><p className=" text-white hover:text-red">Share</p></Link>
                      <Link href="/lompare"><p className=" text-white hover:text-red">Compare</p></Link>
                      <Link href="/like"><p className=" text-white hover:text-red">Like</p></Link>
                    </div>
                  </div>
            </div>

          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductListItem;
