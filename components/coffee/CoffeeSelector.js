import Image from "next/image";

export default function CoffeeSelector({ changeCoffeeSelected, coffeeSelected, coffeeArray, color, fullSize }) {

  // Random rotation on select
  const randomRotation = Math.floor(Math.random() * 30) - 15; 
  const finalRotation = (randomRotation >= -5 && randomRotation <= 5) ? randomRotation + 10 : randomRotation;

  return (
    <div className={`grid w-full h-full grid-cols-8 gap-8 transition-all duration-200 ${fullSize ? 'scale-100' : 'scale-0'}`}>
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
              className={`drop-shadow-lg transition-all duration-75`}
              style={{ transform: coffeeSelected === index ? `rotate(${finalRotation}deg)` : null }}
              draggable={false}
            />
          </div>
          <span className={`text-center text-xl font-bold text-zinc-900 transition-all duration-200`}>{coffee.name}</span>
        </div>
      ))}
    </div>
  );
}
