import Image from "next/image";
import { useEffect, useState } from "react";
import { RandomBlob } from 'react-random-shapes';

export default function CoffeeSelector({ setCoffeeSelected, coffeeSelected, coffeeArray }) {
  const centerOfArray = Math.floor((coffeeArray.length - 1) / 2);
  const initialSelectedCoffee = centerOfArray + 2; // Center + 1
  const initialOffset = centerOfArray * 22;

  const [prevIndex, setPrevIndex] = useState(undefined);
  const [offset, setOffset] = useState(initialOffset);

  useEffect(() => {
    // Set initially selected coffee to center + 1
    setCoffeeSelected(initialSelectedCoffee);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  useEffect(() => {

  }, [coffeeSelected]);


  return (
    <div
      className="grid w-full h-full grid-cols-8 gap-8"
    >
      {coffeeArray.map((coffee, index) => (
        <div
          key={index}
          data-index={index}
          className={`col-span-2 flex flex-col justify-center items-center gap-4`}
          onClick={() => setCoffeeSelected(index)}
        >
          <div
            className={`rounded-full wi10rem] h-[10rem] aspect-square object-cover p-4 bg-zinc-800 transition-all duration-200
            ${
              coffeeSelected === index
                ? "bg-gradient-to-br from-purple-400 to-purple-500 shadow-xl-inner"
                : "bg-zinc-800 drop-shadow-xl"
            }`}
          >
            <Image
              src={coffee.imageUrl}
              width={1000}
              height={1000}
              alt={coffee.name}
              className="drop-shadow-lg"
              draggable={false}
            />
          </div>
          <span className="text-center text-xl font-bold">{coffee.name}</span>
        </div>
      ))}
    </div>
  );
}
