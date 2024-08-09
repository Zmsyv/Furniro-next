import Image from "next/image";
import React from "react";

const HeaderMenu = () => {
  return (
    <div className="hidden ">
      <Image
        src="./images/menuIcon.svg"
        width={28}
        height={28}
        alt="Picture of the author"
      />
    </div>
  );
};

export default HeaderMenu;
