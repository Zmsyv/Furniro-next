import Link from "next/link";
import React from "react";

const linksData = [
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

const Links = () => {
  return (
    <div>
      <div className="pb-[55px] max-sm:pb-[25px] max-md:pb-[25px]">
        <p className="text-gray-400">Links</p>
      </div>
      <ul className="flex-wrap  justify-center items-center">
        {linksData.map((item) => (
          <li key={item.id} className="pb-[46px] max-sm:pb-[20px] max-md:pb-[20px] ">
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
