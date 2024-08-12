import React from "react";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import CardTags from "./CardTags";

const CardMain = () => {
  return (
    <div className="">
      <CardTags/>
      <CardHeader />
      <CardFooter />
    </div>
  );
};

export default CardMain;
