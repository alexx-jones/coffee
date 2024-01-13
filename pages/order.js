import CoffeeSelector from '@/components/coffee/CoffeeSelector'
import { useEffect, useState } from "react";
import Image from 'next/image';
import React from 'react';
import { RandomBlob } from 'react-random-shapes';
import BlobShape from '@/components/coffee/Blob';

export default function Home({mainColor}) {
  const [coffeeSelected, setCoffeeSelected] = useState(0);
  const [blobRotationDeg, setBlobRotationDeg] = useState(20);
  const [translateXMag, setTranslateXMag] = useState(0);
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
      name: "Mocha",
      imageUrl: "/assets/mocha.png",
    },
    {
      name: "Flat White",
      imageUrl: "/assets/flat_white.png",
    },
    {
      name: "Macchiato",
      imageUrl: "/assets/macchiato.png",
    },
    {
      name: "Cortado",
      imageUrl: "/assets/cortado.png",
    },
  ];


  const randomiseColor = () => {
    setMainColor(colors[Math.floor(Math.random()*colors.length)]);
  }

  const changeCoffeeSelected = (coffee) => {
    if (coffeeSelected !== coffee) {
      setBlobRotationDeg(Math.floor(Math.random() * (90 - 45 + 45)));
      setTranslateXMag(Math.floor(Math.random() * (4)));
      setCoffeeSelected(coffee);
    }
  }
  return (
        <main className={`flex min-h-screen flex-col items-center justify-between`}>
        <div className='w-full flex flex-col gap-12'>
            <div className="-translate-x-1/2 absolute left-0 top-0 bottom-0 w-1/3 content-[] shadow-xl-inner">
              <div 
              className={`h-full relative z-0 transition-all duration-200 hover:scale-110`}
              style={{transform: `rotate(${blobRotationDeg}deg) translateX(${translateXMag}rem)`}}
              >
                <BlobShape color={mainColor} className={"h-full transition-all duration-200"}/>
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
            <div className='grid grid-cols-12 row-span-1 p-4'>
            <div className='col-span-4'>
            </div>
            <div className='col-span-8 flex flex-col items-center'>
                <div className='w-full text-center my-4 py-8'>
                  <span className='font-extrabold text-5xl text-zinc-800'>Order a drink</span>
                </div>
                <CoffeeSelector changeCoffeeSelected={changeCoffeeSelected} coffeeSelected={coffeeSelected} coffeeArray={coffeeArray} color={mainColor} />
            </div>
            </div>
        </div>
        </main>
  )
}
