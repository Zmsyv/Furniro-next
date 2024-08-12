import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Logo from "./Logo";
import HeaderIcon from "./HeaderIcon";
import HeaderMenu from "./HeaderMenu";

const TheHeader = () => {
  return (
    <div className="flex justify-between pt-[29px] ">
      <Link href="/" className="">
        <Logo />
      </Link>
      <Menu />
      <HeaderIcon />
      <HeaderMenu />
    </div>
  );
};

export default TheHeader;
