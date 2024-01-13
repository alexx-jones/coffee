import CoffeeSelector from '@/components/coffee/CoffeeSelector'
import { useEffect, useState } from "react";
import Image from 'next/image';
import React from 'react';
import BlobShape from '@/components/coffee/Blob';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Home({mainColor}) {
  const [coffeeSelected, setCoffeeSelected] = useState(0);
  const [blobRotationDeg, setBlobRotationDeg] = useState(20);
  const [translateXMag, setTranslateXMag] = useState(0);
  const [insideBlobScale, setInsideBlobScale] = useState("scale-[85%]");
  const [totalScale, setTotalScale] = useState("scale-[115%]");
  const [showBasics, setShowBasics] = useState(true);
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
    {
      name: "Frappé",
      imageUrl: "/assets/frappe.png",
    },
  ];

  const changeCoffeeSelected = (coffee) => {
    if (coffeeSelected !== coffee) {
      setBlobRotationDeg(Math.floor(Math.random() * (90 - 45 + 45)));
      setTranslateXMag(Math.floor(Math.random() * (4)));
      setCoffeeSelected(coffee);
    }
  }

  const continueForward = () => {
    setInsideBlobScale("scale-0");
    setTotalScale("scale-[95%] duration-300");
    setTimeout(() => {setTotalScale("scale-[800%] duration-[600ms]")}, 300);
    setTimeout(() => {setShowBasics(false);}, 200);
  }
  return (
    <main className="flex flex-col items-center justify-between overflow-hidden min-h-screen" style={{ marginTop: '-6rem', paddingTop: '6rem' }}>
    <div className="w-full flex flex-col gap-12 relative">
      <div className={`-translate-x-1/2 absolute left-0 top-0 bottom-0 w-1/3 content-[] shadow-xl-inner ${totalScale} z-[30] transition-all `}>
        <div
          className={`h-full relative z-0 transition-all duration-200`}
          style={{ transform: `rotate(${blobRotationDeg}deg) translateX(${translateXMag}rem)` }}
        >
          <BlobShape color={mainColor} />
        </div>
        {coffeeArray && coffeeSelected !== undefined ? (
          <div className={`translate-x-[4rem] w-full flex justify-center h-full items-center flex-col mx-20 z-100 absolute top-0 transition-all duration-100 ${insideBlobScale}`}>
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
        <div className='col-span-8 flex flex-col items-center gap-12 pt-12'>
          <div className='w-full text-center'>
            <span className='font-extrabold text-5xl text-zinc-800'>Order a drink</span>
          </div>
          <CoffeeSelector changeCoffeeSelected={changeCoffeeSelected} coffeeSelected={coffeeSelected} coffeeArray={coffeeArray} color={mainColor} fullSize={showBasics} /> 
          <div className='pt-8 w-full flex justify-end px-12'>
            <button style={{ backgroundColor: mainColor }} 
            className={`w-[20rem] py-6 rounded-xl flex gap-8 items-center justify-center text-white text-lg font-bold drop-shadow-2xl`
          }
            onClick={continueForward}
            >
              <span>Customise</span> <FontAwesomeIcon icon={faChevronRight} className={`transition-all duration-1000`} /> 
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  )
}
