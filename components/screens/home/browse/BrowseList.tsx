import Image from "next/image";
import Link from "next/link";
import React from "react";

const browseData = [
  {
    id: 1,
    src: "./images/dining.svg",
    title: "Dining",
  },
  {
    id: 2,
    src: "./images/living.svg",
    title: "Living",
  },
  {
    id: 3,
    src: "./images/bedroom.svg",
    title: "Bedroom",
  },
];

const BrowseList = () => {
  return (
    <>
      <ul className=" grid grid-cols-3 sm:grid-cols-1 max-sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-[20px]  ">
        {browseData.map((item) => (
          <li key={item.id}>
            <Link href="">
            <Image src={item.src} width={381} height={480} alt="" />
            <p className="text-[24px] text-center pt-[30px] font-bold">
              {item.title}
            </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BrowseList;
