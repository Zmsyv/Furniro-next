import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hover = () => {
  return (
    <div className="absolute  w-[100%] h-[100%] top-0 left-0 bg-boldgray flex justify-center items-center flex-col opacity-0 ease-in duration-100 hover:opacity-70 ">
      <div className="pb-4">
        <Link href="single-product">
          <Button
            variant="outline"
            className=" w-[50%] sm:w-10 md:w-24 lg:w-40 xl:w-60 text-orange border-orange  "
          >
            <p>Details</p>
          </Button>
        </Link>
      </div>

      <div>
        <Button
          variant="outline"
          className=" w-[50%] sm:w-10 md:w-24 lg:w-40 xl:w-60 text-orange border-orange "
        >
          <p>Add to cart</p>
        </Button>
      </div>
      <div className=" flex text-[16px] text-white pt-4  gap-4 ">
        <Link href="" className="flex gap-2 ">
          <Image
            src="./images/share.svg"
            width={16}
            height={16}
            alt="Picture of the author"
          />
          <p className=" text-white hover:text-red">Share</p>
        </Link>
        <Link href="" className="flex gap-2">
          <Image
            src="./images/compare.svg"
            width={16}
            height={16}
            alt="Picture of the author"
          />
          <p className=" text-white hover:text-red">Compare</p>
        </Link>
        <Link href="" className="flex gap-2">
          <Image
            src="./images/favIcon.svg"
            width={16}
            height={16}
            alt="Picture of the author"
          />
          <p className=" text-white hover:text-red">Like</p>
        </Link>
      </div>
    </div>
  );
};

export default Hover;
