import Link from "next/link";
import React from "react";

const Furniro = () => {
  return (
    <div>
      <div className="pb-[50px] max-sm:pb-[25px] max-md:pb-[25px] ">
        <Link href="/" className="text-[24px] font-bold">Furniro.</Link>
      </div>
      <div>
        <p className="text-light">400 University Drive Suite 200 Coral <br />
             Gables,<br /> FL 33134 USA</p>
      </div>
    </div>
  );
};

export default Furniro;
