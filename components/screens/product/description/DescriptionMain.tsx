import React from "react";
import DescriptionContent from "./DescriptionContent";
import DescriptionTitle from "./DescriptionTitle";
import DescriptionImg from "./DescriptionImg";

const DescriptionMain = () => {
  return (
    <div className=" pt-16 ">
      <DescriptionContent />
      <DescriptionTitle />
      <DescriptionImg />
    </div>
  );
};

export default DescriptionMain;
