import CoffeeSelector from '@/components/coffee/CoffeeSelector'
import { useState } from "react";
import Image from 'next/image';

export default function Home() {
  const [coffeeSelected, setCoffeeSelected] = useState();
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
  ]
  return (
        <main className={`flex min-h-screen flex-col items-center justify-between`}>
        <div className='w-full flex flex-col gap-6'>
            <div className='absolute left-0 top-0 bottom-0 -translate-x-12 w-1/3 rounded-r-full content-[] bg-gradient-to-r from-purple-400 to-purple-500 shadow-xl-inner'>
            {coffeeArray && coffeeSelected !== undefined ? (
                <div className='w-full flex justify-center h-full flex-col items-center'>
                <Image
                    src={coffeeArray[coffeeSelected]?.imageUrl}
                    width="1000"
                    height="1000"
                    className='w-1/3'
                    alt={coffeeArray[coffeeSelected]?.name}
                />
                <span>{coffeeArray[coffeeSelected]?.name}</span>
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
            </div>
            </div>
        </div>
        </main>
  )
}
