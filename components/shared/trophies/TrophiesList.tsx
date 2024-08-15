import Image from "next/image";
import React from "react";

const trophiesData = [
  {
    id: "1",
    src: "./images/trophiesImg/trophy.svg",
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    id: "2",
    src: "./images/trophiesImg/warranty.svg",
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    id: "3",
    src: "./images/trophiesImg/shipping.svg",
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    id: "4",
    src: "./images/trophiesImg/support.svg",
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

const TrophiesList = () => {
  return (
    <div>
      <ul
        className="flex justify-between bg-lightOrange1
       px-[53px] py-[105px] gap-[55px] "
      >
        {trophiesData.map((item) => (
          <li key={item.id}>
            <div className="flex gap-[10px] ">
              <div>
                <Image src={item.src} width={60} height={60} alt="" />
              </div>
              <div>
                <h2 className="text-[25px] font-bold">{item.title}</h2>
                <p className="text-[20px] text-light">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrophiesList;
