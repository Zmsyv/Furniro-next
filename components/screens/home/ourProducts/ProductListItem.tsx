import CardTags from "@/components/card/CardTags";
import Image from "next/image";
import React from "react";

const productData = [
  {
    id: 1,
    src: "./images/chair.svg",
    alt: "",
    title: "Syltherine",
    category: "Stylish cafe chair",
    total:3500000,
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
    category: "dgjwdjhd",
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
    total: 7000000 ,
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
    <div className="">
      <ul className=" grid grid-cols-4 gap-[32px] max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {productData.map((item) => (
          <li  className=" w-[285px] h-[446px]" key={item.id}>
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
              <div className="">
                <Image src={item.src} width={285} height={301} alt={item.alt} />
              </div>
            </div>

            <div className="pl-[16px] w-[285px] bg-lightOrange1">
              <h3 className=" font-bold text-[24px] pt-4 ">{item.title}</h3>
              <h4 className="text-light py-[8px]">{item.category}</h4>
              <div className="flex justify-between">
              <h3 className="font-bold pb-[30px]">{item.total- item.total * item.tags.discount /100} $</h3>
              {item.tags.isDiscount && (
                  <div className=" text-light pr-[16px] line-through">
                    { item.total } $
                  </div>
                )}

              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListItem;
