import React from "react";

const ProductFooter = ({ item }) => {
  return (
    <>
      <div className="pl-[16px]  bg-gray">
        <h3 className=" font-bold text-[24px] pt-4 ">{item.title}</h3>
        <h4 className="text-light py-[8px]">{item.category}</h4>
        <div className="flex justify-between min-[320px]: flex-wrap ">
          <h3 className="font-bold min-[320px]: pb-2 sm:pb-[30px]  ">
            {item.total - (item.total * item.tags.discount) / 100} $
          </h3>
          {item.tags.isDiscount && (
            <div className=" text-light pr-[16px] line-through ">
              {item.total} $
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductFooter;
