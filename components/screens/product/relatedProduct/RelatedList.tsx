import React from "react";
import RelatedItem from "./RelatedItem";
import { Button } from "@/components/ui/button";

const RelatedList = () => {
  return (
    <div>
      <RelatedItem />
      <div className=" pt-[32px]  flex justify-center items-center text-center min-[320px]:">
        <Button
          variant="outline"
          className=" w-[245px]   sm:w-15 md:w-30 lg:w-45 xl:w-60 text-orange border-orange "
        >
          <p>Show More</p>
        </Button>
      </div>
    </div>
  );
};

export default RelatedList;
