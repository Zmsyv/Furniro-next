import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Letter = () => {
  return (
    <div className="max-sm:pb-[20px] max-md:pb-[20px]">
      <div className="pb-[55px] max-sm:pb-[25px] max-md:pb-[25px]">
        <p className="text-light">Newsletter</p>
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit" variant="outline">Subscribe</Button>
      </div>
    </div>
  );
};

export default Letter;
