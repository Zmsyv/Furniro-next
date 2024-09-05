import React from "react";
import BreadCrumbMain from "./breadCrumb/BreadCrumbMain";
import HeroProductMain from "./heroProduct/HeroProductMain";
import RelatedMain from "./relatedProduct/RelatedMain";
import DescriptionMain from "./description/DescriptionMain";

const SingleProductMain = () => {
  return (
    <div>
      <BreadCrumbMain />
      <HeroProductMain />
      <DescriptionMain/>
      <RelatedMain />
    </div>
  );
};

export default SingleProductMain;
