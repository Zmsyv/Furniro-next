import React from "react";
import HeroProductList from "./HeroProductList";
import ColorPicker from "../ColorPicker";
import SizePicker from "./SizePicker";
import { Button } from "@/components/ui/button";
import { RatingStar } from "./RatingStar";

const HeroProductMain = () => {
  return (
    <>
      <div className="flex pb-[56px]">
        <div className=" flex px-[100px] pt-8 ">
          <HeroProductList />
        </div>
        <div>
          <h2 className="text-[42px]">Asgaard sofa</h2>
          <p className="text-[24px] text-light">$ 250,000.00</p>
          <div className="flex pb-5">
            <p>5 Customer Review</p>
          </div>
          <div>
            <p className="text-[13px] pb-[22px]">
              Setting the bar as one of the loudest speakers in its class, the{" "}
              <br />
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio <br />
              which boasts a clear midrange and extended highs for a sound.
            </p>
          </div>
          <div>
            <SizePicker />
          </div>
          <div>
            <ColorPicker />
          </div>
          <div className="flex pt-8">
            {/* <div className="w-[123px] h-16">
              <CarouselPlugin />
            </div> */}
            <div className=" flex gap-3">
              <div className="w-[100%] h-16 ">
                <Button variant={"outline"} className="rounded-[10px]">
                  <p className="px-[48px] py-[17px] ">Add to cart</p>
                </Button>
              </div>
              <div className="w-[100%] h-16">
                <Button variant={"outline"} className="rounded-[10px]">
                  <p className="px-[48px] py-[17px] ">+ Compare</p>
                </Button>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex gap-7 text-light pt-[41px]">
            <div>
              <p>SKU</p>
              <p>Category</p>
              <p>Tags</p>
              <p>Share</p>
            </div>
            <div>
              <p>: SS001</p>
              <p>: Sofas</p>
              <p>: Sofa chair home shop</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* <RatingStar/> */}
    </>
  );
};

export default HeroProductMain;
