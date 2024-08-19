import Image from "next/image";
import React from "react";
import HeroProductList from "./HeroProductList";
import { Toggle } from "@/components/ui/toggle";
import ColorPicker from "../ColorPicker";

const HeroProductMain = () => {
  return (
    <div className="flex">
      <div className=" flex px-[100px] pt-8 ">
        <HeroProductList />
      </div>
      <div>
        <h2>Asgaard sofa</h2>
        <p>$ 250,000.00</p>
        <div className="flex">
          <Image
            src="./images/singleProduct/review.svg"
            width={124}
            height={20}
            alt="review"
          />
          <p>5 Customer Review</p>
        </div>
        <div>
          <p>
            Setting the bar as one of the loudest speakers in its class, the{" "}
            <br />
            Kilburn is a compact, stout-hearted hero with a well-balanced audio{" "}
            <br />
            which boasts a clear midrange and extended highs for a sound.
          </p>
        </div>
        <div>
          <p>Size</p>
          <div className="flex gap-2 py-3 ">
            <Toggle variant="active">
              <p>L</p>
            </Toggle>
            <Toggle variant="active">
              <p className="">XL</p>
            </Toggle>
            <Toggle variant="active">
              <p className="">XS</p>
            </Toggle>
          </div>
        </div>
        <div>
          <p>Color</p>
          <ColorPicker />
        </div>
      </div>
    </div>
  );
};

export default HeroProductMain;
