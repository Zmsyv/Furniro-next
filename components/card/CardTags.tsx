import React from "react";

const CardTags = (tags) => {
  console.log(tags);
  return (
    <div className="flex  items-center p-4 gap-2 absolute top-3 right-3 z-10 ">
      {tags.isDiscount && (
        <div className="bg-red rounded-full w-11 h-11 flex items-center justify-center ">
          {tags.discount}%
        </div>
      )}

      {tags.isNew && (
        <div className="bg-blue rounded-full w-11 h-11 flex items-center justify-center   ">
          New
        </div>
      )}
    </div>
  );
};

export default CardTags;
