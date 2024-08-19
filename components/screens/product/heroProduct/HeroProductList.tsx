import Image from 'next/image'
import React from 'react'

const singleData =[
    {
        id:1,
        src:"./images/singleProduct/product1.svg",

    },
    {
        id:2,
        src:"./images/singleProduct/product2.svg",

    },
    {
        id:3,
        src:"./images/singleProduct/product3.svg",

    },
    {
        id:4,
        src:"./images/singleProduct/product4.svg",

    },
]

const HeroProductList = () => {
  return (
    <div className='flex'>
        <div className=" pr-[31px] ">
        {singleData.map((item) => (
            <Image
            className="pb-[32px] " key={item.id}
            src={item.src}
            width={76}
            height={80}
            alt="Picture of the product"
          />
            
        ))}
      </div>
      <div className="bg-peach rounded-[10px] h-[500px] ">
        <Image
          className="pt-[78px]"
          src="./images/singleProduct/product5.svg"
          width={481}
          height={391}
          alt="Picture of the product"
        />
      </div>
    </div>
  )
}

export default HeroProductList