import Link from "next/link";
import React from "react";

const helpData = [
  {
    id: 1,
    title: "Payment Options",
    url: "payment",
  },
  {
    id: 2,
    title: "Returns",
    url: "return",
  },
  {
    id: 3,
    title: "Privacy Policies",
    url: "privacy",
  },
];

const Help = () => {
  return (
    <div>
      <div className="pb-[55px] max-sm:pb-[25px] max-md:pb-[25px]">
        <p className="text-light">Help</p>
      </div>
      <ul className="flex-wrap  justify-center items-center">
        {helpData.map((item) => (
          <li 
            key={item.id}
            className="pb-[46px] max-sm:pb-[20px] max-md:pb-[20px] hover:text-orange "
          >
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Help;
