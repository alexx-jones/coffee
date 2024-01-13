import Image from "next/image";
import { useEffect, useState } from "react";
import { RandomBlob } from 'react-random-shapes';

export default function CoffeeSelector({ changeCoffeeSelected, coffeeSelected, coffeeArray, color }) {
  const centerOfArray = Math.floor(coffeeArray.length / 2);
  const initialSelectedCoffee = centerOfArray + 1; // Center
  const initialOffset = centerOfArray * 22;

  const [offset, setOffset] = useState(initialOffset);

  useEffect(() => {
    // Set initially selected coffee to center
    changeCoffeeSelected(initialSelectedCoffee);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="grid w-full h-full grid-cols-8 gap-8">
      {coffeeArray.map((coffee, index) => (
        <div
          key={index}
          data-index={index}
          className={`col-span-2 flex flex-col justify-center items-center gap-4`}
          onClick={() => changeCoffeeSelected(index)}
        >
          <div
            className={`rounded-full w-[10rem] h-[10rem] aspect-square object-cover p-4 bg-zinc-800 transition-all duration-200
            ${color && (coffeeSelected === index ? `shadow-xl-inner` : "drop-shadow-xl")}`}
            style={{ backgroundColor: coffeeSelected === index ? color : 'rgb(39 39 42)' }}
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
