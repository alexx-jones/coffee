export default function CoffeeCustomiser({ coffeeSelected, coffeeArray }) {
    return (
        <div className="relative left-0 right-0 top-0 bottom-0 z-[51] transition-all duration-100">
            <div className="w-full h-full grid grid-cols-12 p-12 gap-4 py-[5rem]">
                <div className="col-span-full flex items-center justify-center">
                    <p className="text-5xl font-extrabold text-white w-full text-center"> Customize your {coffeeArray[coffeeSelected].name} </p>
                </div>
            </div>
        </div>
    );
}
