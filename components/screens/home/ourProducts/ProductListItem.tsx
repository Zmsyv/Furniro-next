import CardTags from "@/components/card/CardTags";
import Image from "next/image";
import React from "react";

const productData = [
  {
    id: 1,
    src: "./images/lamb.svg",
    alt: "",
    title: "Grifo",
    category: "Night Lamb",
    price: "1500 RP",
    tags: {
      isNew: true,
      isDiscount: true,
      discount: "-50",
    },
  },
  {
    id: 2,
    src: "./images/lamb.svg",
    alt: "",
    title: "Grifo",
    category: "Night Lamb",
    price: "1500 RP",
    tags: {
      isNew: false,
      isDiscount: true,
      discount: "-50",
    },
  },
  {
    id: 3,
    src: "./images/lamb.svg",
    alt: "",
    title: "Grifo",
    category: "Night Lamb",
    price: "1500 RP",
    tags: {
      isNew: true,
      isDiscount: false,
      discount: "0",
    },
  },
];

const ProductListItem = () => {
  return (
    <div>
      <ul className=" flex gap-[20px] ">
        {productData.map((item) => (
          <li className=" " key={item.id}>
            <div className=" relative">
              <div className="flex  items-center p-4 gap-2 absolute top-3 right-3 z-10 ">
                {item.tags.isDiscount && (
                  <div className="bg-red rounded-full w-11 h-11 flex items-center justify-center ">
                    {item.tags.discount}%
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
              <h3 className="font-bold pb-[30px]">{item.price}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListItem;
