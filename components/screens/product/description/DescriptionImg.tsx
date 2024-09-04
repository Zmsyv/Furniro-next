import Image from "next/image";
import React from "react";

const DescriptionImg = () => {
  return (
    <div className="flex gap-[29px] pt-[36px] px-[100px]">
      <Image
        className="bg-lightOrange1 rounded-[10px]"
        src="./images/singleProduct/description.svg"
        width={605}
        height={385}
        alt="Picture of the author"
      />
      <Image
        className="bg-lightOrange1 rounded-[10px]"
        src="./images/singleProduct/description.svg"
        width={605}
        height={385}
        alt="Picture of the author"
      />
    </div>
  );
};

export default DescriptionImg;
