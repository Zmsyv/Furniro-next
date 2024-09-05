"use client";
import React from "react";
import DescriptionContent from "./DescriptionContent";
import DescriptionTitle from "./DescriptionTitle";
import DescriptionImg from "./DescriptionImg";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

// const DescriptionMain = () => {
//   return (
//     <div className=" pt-16 ">
//       <DescriptionContent />
//       <DescriptionTitle />
//       <DescriptionImg />
//     </div>
//   );
// };

// export default DescriptionMain;

const DescriptionMain = () => {
  return (
    <Tabs
      defaultValue="account"
      className="w-full  gap-[53px] justify-center pb-[37px] text-light px-[100px] pt-12"
    >
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="Description">Description</TabsTrigger>
        <TabsTrigger value="Additional Information">
          Additional Information
        </TabsTrigger>
        <TabsTrigger value="Reviews [5]">Reviews [5]</TabsTrigger>
      </TabsList>
      <TabsContent value="Description">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-center ">Description</CardTitle>
            <h3 className="text-light text-[16px]">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </h3>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <h3 className="text-light text-[16px]">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </h3>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex gap-[29px] pt-[36px] w-full">
              <Image
                className="bg-lightOrange1 rounded-[10px]"
                src="./images/singleProduct/description.svg"
                width={605}
                height={385}
                alt="Picture of the author"
              />
              <Image
                className="bg-lightOrange1 rounded-[10px]"
                src="./images/singleProduct/description.svg"
                width={605}
                height={385}
                alt="Picture of the author"
              />
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Additional Information">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-center">
              Additional Information
            </CardTitle>
            <h3 className="text-light text-[16px]">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </h3>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <h3 className="text-light text-[16px]"> 
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </h3>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex gap-[29px] pt-[36px] w-full">
              <Image
                className="bg-lightOrange1 rounded-[10px]"
                src="./images/singleProduct/description.svg"
                width={605}
                height={385}
                alt="Picture of the author"
              />
              <Image
                className="bg-lightOrange1 rounded-[10px]"
                src="./images/singleProduct/description.svg"
                width={605}
                height={385}
                alt="Picture of the author"
              />
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Reviews [5]">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-center">Reviews [5]</CardTitle>
            <h3 className="text-light text-[16px]">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </h3>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <h3 className="text-light text-[16px]">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </h3>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex gap-[29px] pt-[36px] w-full">
              <Image
                className="bg-lightOrange1 rounded-[10px]"
                src="./images/singleProduct/description.svg"
                width={605}
                height={385}
                alt="Picture of the author"
              />
              <Image
                className="bg-lightOrange1 rounded-[10px]"
                src="./images/singleProduct/description.svg"
                width={605}
                height={385}
                alt="Picture of the author"
              />
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default DescriptionMain;
