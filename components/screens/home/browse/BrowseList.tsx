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
    <div>
      <ul className=" flex gap-[20px] ">
        {browseData.map((item) => (
          <li className=" " key={item.id}>
            <Image src={item.src} width={381} height={480} alt="" />
            <p className="text-[24px] text-center pt-[30px] font-bold">
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseList;
