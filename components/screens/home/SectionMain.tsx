import React from "react";
import OurProductMain from "./ourProducts/OurProductMain";
import BrowseMain from "./browse/BrowseMain";
import ExploreMain from "./explore/ExploreMain";
import HeroMain from "./hero/HeroMain";

const SectionMain = () => {
  return (
    <div>
      <HeroMain/>
      <BrowseMain />
      <OurProductMain />
      <ExploreMain/>
    </div>
  );
};

export default SectionMain;
