import CoffeeSelector from '@/components/coffee/CoffeeSelector'
import { useEffect, useState } from "react";
import Image from 'next/image';
import React from 'react';
import { RandomBlob } from 'react-random-shapes';
import BlobShape from '@/components/coffee/Blob';

export default function Home() {
  const [coffeeSelected, setCoffeeSelected] = useState();
  const [mainColor, setMainColor] = useState("");
  const [colors, setColors] = useState([
    "#7D82B8",
    "#613F75",
    "#FF0054",
    "#FF5400",
    "#048A81",
    "#391463",
    "#BFAE48",
    "#5FAD41",
    "#2D936C",
    "#3A0842",
    "#DB3069",
  ]);
  const coffeeArray = [
    {
      name: "Espresso",
      imageUrl: "/assets/espresso.png",
    },
    {
      name: "Cappuccino",
      imageUrl: "/assets/cappuccino.png",
    },
    {
      name: "Latte",
      imageUrl: "/assets/latte.png",
    },
    {
      name: "Flat White",
      imageUrl: "/assets/flat_white.png",
    },
    {
      name: "Mocha",
      imageUrl: "/assets/mocha.png",
    },
    {
      name: "Flat White",
      imageUrl: "/assets/flat_white.png",
    },
  ];


  useEffect(() => {
    setMainColor(colors[Math.floor(Math.random()*colors.length)]);

  }, [colors]);

  const randomiseColor = () => {
    setMainColor(colors[Math.floor(Math.random()*colors.length)]);
  }
  return (
        <main className={`flex min-h-screen flex-col items-center justify-between`}>
        <div className='w-full flex flex-col gap-6'>
            <div className="-translate-x-1/2 absolute left-0 top-0 bottom-0 w-1/3 content-[] shadow-xl-inner">
              <div className='h-full relative z-0'>
                <BlobShape color={mainColor} className={"h-full"}/>
              </div>
              {coffeeArray && coffeeSelected !== undefined ? (
                  <div className='translate-x-[8rem] w-full flex justify-center h-full items-center flex-col mx-20 z-100 absolute top-0'>
                  <Image
                      src={coffeeArray[coffeeSelected]?.imageUrl}
                      width="1000"
                      height="1000"
                      className='w-1/3'
                      alt={coffeeArray[coffeeSelected]?.name}
                  />
                  <span className='font-bold text-3xl text-white drop-shadow-lg'>{coffeeArray[coffeeSelected]?.name}</span>
                  </div>
              ) : (
                  <></>
              )}
            </div>
            <div className='grid grid-cols-12 row-span-1'>
            <div className='col-span-4'>
            </div>
            <div className='col-span-8 flex items-center'>
                <CoffeeSelector setCoffeeSelected={setCoffeeSelected} coffeeSelected={coffeeSelected} coffeeArray={coffeeArray} />
            <button onClick={randomiseColor} className='z-[100]'>randomise</button>
            {mainColor}
            </div>
            </div>
        </div>
        </main>
  )
}
