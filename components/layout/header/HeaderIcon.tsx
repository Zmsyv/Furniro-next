import Image from "next/image";
import Link from "next/link";
import React from "react";

const iconData = [
  {
    id: 1,
    title: "User",
    src: "./images/loginIcon.svg",
  },
  {
    id: 2,
    title: "Find",
    src: "./images/findIcon.svg",
  },
  {
    id: 3,
    title: "Favourites",
    src: "./images/favIcon.svg",
  },
  {
    id: 4,
    title: "Cart",
    src: "./images/cartIcon.svg",
  },
];

const HeaderIcon = () => {
  return (
    <ul className="flex max-sm:hidden sm:hidden lg:flex xl:flex gap-[75px] pl-[266px] pt-[12px] justify-center items-center ">
      {iconData.map((item) => (
        <li key={item.id}>
          <Link href={item.title}>
            <div className="w-[28px] h-[28px]">
              <Image src={item.src} width={28} height={28} alt="" />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderIcon;
