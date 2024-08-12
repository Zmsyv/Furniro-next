import React from "react";
import OurProductMain from "./ourProducts/OurProductMain";
import BrowseMain from "./browse/BrowseMain";
import ExploreMain from "./explore/ExploreMain";

const SectionMain = () => {
  return (
    <div>
      <BrowseMain />
      <OurProductMain />
      <ExploreMain/>
    </div>
  );
};

export default SectionMain;
