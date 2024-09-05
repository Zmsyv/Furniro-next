import Link from "next/link";
import React, { Children } from "react";
import ProductFooter from "./ProductFooter";
import ProductHeader from "./ProductHeader";
import Hover from "./Hover";

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
      <ul className=" grid grid-cols-1 gap-[32px]  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {productData.map((item) => (
          <li className=" w-[100%] h-[446px]" key={item.id}>
            <div className="relative w-[100%]">
              <ProductHeader item={item} />
              <ProductFooter item={item} />
              <Hover />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductListItem;
