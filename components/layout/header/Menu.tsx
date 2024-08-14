import Link from "next/link";
import React from "react";

const menuData = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Shop",
    url: "shop",
  },
  {
    id: 3,
    title: "About",
    url: "about",
  },
  {
    id: 4,
    title: "Contact",
    url: "contact",
  },
];

const Menu = () => {
  return (
    <ul className="flex max-sm:hidden sm:hidden lg:hidden xl:flex gap-[75px] pl-[266px] pt-[12px] justify-center items-center ">
      {menuData.map((item) => (
        <li className="hover:text-orange" key={item.id}>
          <Link href={item.url}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
