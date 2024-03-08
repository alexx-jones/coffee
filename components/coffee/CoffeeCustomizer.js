import Image from "next/image";
import { drinkEncoding } from "@/pages/api/server/encodeDecodeOrder/values";
import { useEffect, useState } from "react";
import BlobShape from "./Blob";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";


function wordToInteger(value) {
    const wordToNumber = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
    };

    return wordToNumber[value] !== undefined ? wordToNumber[value] : null;
}

export default function CoffeeCustomiser({ coffeeSelected, coffeeArray, mainColor }) {
    const coffee = coffeeArray[coffeeSelected];
    const [milkTypes, setMilkTypes] = useState([]);
    const [syrupFlavours, setSyrupFlavours] = useState([]);
    const [sizesAvailable, setSizesAvailable] = useState([]);
    const [decafOptions, setDecafOptions] = useState([]);
    const [availableShotOptions, setAvailableShotOptions] = useState([]);
    const [availableCocoaToppings, setAvailableCocoaToppings] = useState([]);
    const [availableTemperatures, setAvailableTemperatures] = useState([]);
    const [availableWhippedCream, setAvailableWhippedCream] = useState([]);
    const [currentMilkType, setCurrentMilkType] = useState();
    const [currentSyrupFlavour, setCurrentSyrupFlavour] = useState();
    const [currentSyrupShotCount, setCurrentSyrupShotCount] = useState();
    const [currentEspressoShot, setCurrentEspressoShot] = useState();
    const [currentCocoaOption, setCurrentCocoaOption] = useState();
    const [currentTemperature, setCurrentTemperature] = useState();
    const [currentWhippedCream, setCurrentWhippedCream] = useState();
    const [currentSize, setCurrentSize] = useState();
    const [currentDecaf, setCurrentDecaf] = useState();
    const [stage, setStage] = useState("Milk type.");

    useEffect(() => {
        // Sets states. Filters out not-bounds
        setMilkTypes(Object.keys(drinkEncoding.milkType).filter(key => !key.includes("not-bound")));
        

        // Syrup Flavours
        let syrupFlavours = Object.keys(drinkEncoding.syrupFlavour)
        .filter(key => !key.includes("not-bound"));
        setSyrupFlavours(syrupFlavours);
        

        // Sizes
        let sizes = Object.keys(drinkEncoding.size)
        .filter(key => !key.includes("not-bound"));
        setSizesAvailable(sizes);
        

        // Decaf Options
        let decafOptions = Object.keys(drinkEncoding.decaf)
        .filter(key => !key.includes("not-bound"));
        setDecafOptions(decafOptions);
        

        // Espresso Shots
        let espressoShots = Object.keys(drinkEncoding.shots)
        .filter(key=> !key.includes("not-bound") && !key.includes("zero"));
        setAvailableShotOptions(espressoShots);
        

        // Cocoa Topping
        let cocoaTopping = Object.keys(drinkEncoding.chocolatePowderTopping)
        setAvailableCocoaToppings(cocoaTopping);
        

        // Temperature Options
        let temperatureOptions = Object.keys(drinkEncoding.hotCold)
        .filter(key => !key.includes("not-bound"));
        setAvailableTemperatures(temperatureOptions);
        

        // Whipped Cream Options
        let whippedCreamOptions = Object.keys(drinkEncoding.whippedCream)
        .filter(key => !key.includes("not-bound"));
        setAvailableWhippedCream(whippedCreamOptions);
    }, []);

    useEffect(() => {
        setCurrentMilkType(coffee.milkType);
        setCurrentSyrupFlavour(coffee.syrupFlavour);
        setCurrentSyrupShotCount(wordToInteger(coffee.syrupShots));
        setCurrentSize(coffee.size);
        setCurrentDecaf(coffee.decaf);
        setCurrentEspressoShot(coffee.shots);
        setCurrentCocoaOption(coffee.chocolatePowderTopping);
        setCurrentTemperature(coffee.hotCold);
        setCurrentWhippedCream(coffee.whippedCream)
    }, [coffee]);

    const setMilkType = (milkType) => {
        setCurrentMilkType(milkType)
    };

    const setSyrupFlavour = (syrupFlavour) => {
        setCurrentSyrupFlavour(syrupFlavour)
    }

    const setSize = (syrupFlavour) => {
        setCurrentSize(syrupFlavour)
    }

    const setDecafOption = (decaf) => {
        setCurrentDecaf(decaf);
    }

    const setEspressoShot = (espresso) => {
        setCurrentEspressoShot(espresso);
    }

    const setCocoaOption = (cocoa) => {
        setCurrentCocoaOption(cocoa);
    }
    
    const setWhippedCream = (cream) => {
        setCurrentWhippedCream(cream);
    }

    const setTemperature = (temperature) => {
        setCurrentTemperature(temperature);
    }
    const increaseShotAmount = () => {
        if (currentSyrupShotCount < 3) {
            setCurrentSyrupShotCount(currentSyrupShotCount + 1);
        }
    }

    const decreaseShotAmount = () => {
        if (currentSyrupShotCount > 0) {
            setCurrentSyrupShotCount(currentSyrupShotCount - 1);
        } 
    }
    return (
        <div className="relative left-0 right-0 top-0 bottom-0 z-[20] transition-all duration-100 overflow-y-hidden mt-[-6.1rem] pt-[6rem]">
            <div className="w-full h-fit overflow-x-hidden grid grid-cols-12 p-12">
                <div className="col-span-1">
                    <Image
                    src={coffee.imageUrl}
                    height={250}
                    width={250}
                    alt={`Image of ${coffee.name}`}
                    className="h-40 w-40 aspect-square object-center object-scale-down"
                    />
                </div>
                <div className="col-span-11 flex flex-col items-start justify-center gap-4 pl-12">
                    <p className="text-5xl font-extrabold text-zinc-800 w-full text-left"> Customize your <span style={{color: mainColor}}>{coffee.name}</span> </p>
                    <div className="content-[] h-[1px] w-2/3" style={{backgroundColor: mainColor}}></div>
                </div>
                
                
                {/* It begins */}
                <div className="col-span-1 content-[]"></div>
                <div className="col-span-11 flex-col flex gap-8 pl-12 pt-4">
                    <div className="flex items-center gap-16">
                        <span className="text-left text-4xl font-extrabold text-zinc-800">Size</span>   
                    </div>
                    <div className="col-span-6 flex flex-wrap gap-x-16 gap-y-8">
                        {sizesAvailable.map((size, index) => (
                            <div key={index} onClick={() => {setSize(size)}} className={`w-[8rem] h-[8rem] text-white font-semibold flex justify-center items-center rounded-full cursor-pointer select-none capitalize transition-all duration-100 ${size === currentSize && ('scale-110')}`} style={{backgroundColor: `${size === currentSize ? mainColor : '#18181b'}`}}>
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-1 content-[]"></div>
                <div className="col-span-11 flex-col flex gap-8 pl-12 pt-16">
                    <span className="text-left text-4xl font-extrabold text-zinc-800">Milk Type</span>
                    <div className="col-span-6 flex flex-wrap gap-16">
                        {milkTypes.map((milkType, index) => (
                            <div key={index} onClick={() => {setMilkType(milkType)}} className={`w-[8rem] h-[8rem] text-white font-semibold flex justify-center items-center rounded-full cursor-pointer select-none capitalize transition-all duration-100 ${milkType === currentMilkType && ('scale-110')}`} style={{backgroundColor: `${milkType === currentMilkType ? mainColor : '#18181b'}`}}>
                                {milkType}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-1 content-[]"></div>
                <div className="col-span-11 flex-col flex gap-8 pl-12 pt-16">
                    <span className="text-left text-4xl font-extrabold text-zinc-800">Temperature</span>
                    <div className="col-span-6 flex flex-wrap gap-16">
                        {availableTemperatures.map((temperature, index) => (
                            <div key={index} onClick={() => {setTemperature(temperature)}} className={`w-[8rem] h-[8rem] text-white font-semibold flex justify-center items-center rounded-full cursor-pointer select-none capitalize transition-all duration-100 ${temperature === currentTemperature && ('scale-110')}`} style={{backgroundColor: `${temperature === currentTemperature ? mainColor : '#18181b'}`}}>
                                {temperature}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-1 content-[]"></div>
                <div className="col-span-11 flex-col flex gap-8 pl-12 pt-16">
                    <div className="flex items-center gap-16">
                        <span className="text-left text-4xl font-extrabold text-zinc-800">Decaf?</span>   
                    </div>
                    <div className="col-span-6 flex flex-wrap gap-x-16 gap-y-8">
                        {decafOptions.map((decaf, index) => (
                            <div key={index} onClick={() => {setDecafOption(decaf)}} className={`w-[8rem] h-[8rem] text-white font-semibold flex justify-center items-center rounded-full cursor-pointer select-none capitalize transition-all duration-100 ${decaf === currentDecaf && ('scale-110')}`} style={{backgroundColor: `${decaf === currentDecaf ? mainColor : '#18181b'}`}}>
                                {decaf}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-1 content-[]"></div>
                <div className="col-span-11 flex-col flex gap-8 pl-12 pt-16">
                    <div className="flex items-center gap-16">
                        <span className="text-left text-4xl font-extrabold text-zinc-800">Espresso Shots</span>   
                        <span className="text-zinc-600 font-semibold">&mdash; These shots may be caffeinated or decaffeinated based on the choice above.</span>
                    </div>
                    <div className="col-span-6 flex flex-wrap gap-x-16 gap-y-8">
                        {availableShotOptions.map((espresso, index) => (
                            <div key={index} onClick={() => {setEspressoShot(espresso)}} className={`w-[8rem] h-[8rem] text-white font-semibold flex justify-center items-center rounded-full cursor-pointer select-none capitalize transition-all duration-100 ${espresso === currentEspressoShot && ('scale-110')}`} style={{backgroundColor: `${espresso === currentEspressoShot ? mainColor : '#18181b'}`}}>
                                {espresso}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-1 content-[]"></div>
                <div className="col-span-11 flex-col flex gap-8 pl-12 pt-16">
                    <div className="flex items-center gap-16">
                        <span className="text-left text-4xl font-extrabold text-zinc-800">Syrup Flavour</span>   
                        <div className="text-zinc-700 select-none">
                            <span className="text-xl font-bold mr-6">Shots: </span>
                            <FontAwesomeIcon icon={faCirclePlus} onClick={increaseShotAmount} className="cursor-pointer" /> 
                            <span className="text-xl font-bold mx-6">{currentSyrupShotCount}</span> 
                            <FontAwesomeIcon icon={faCircleMinus} onClick={decreaseShotAmount} className="cursor-pointer"/>
                        </div>
                    </div>
                    <div className="col-span-6 flex flex-wrap gap-x-16 gap-y-8">
                        {syrupFlavours.map((syrupFlavour, index) => (
                            <div key={index} onClick={() => {setSyrupFlavour(syrupFlavour)}} className={`w-[8rem] h-[8rem] text-white font-semibold flex justify-center items-center rounded-full cursor-pointer select-none capitalize transition-all duration-100 ${syrupFlavour === currentSyrupFlavour && ('scale-110')}`} style={{backgroundColor: `${syrupFlavour === currentSyrupFlavour ? mainColor : '#18181b'}`}}>
                                {syrupFlavour}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-1 content-[]"></div>
                <div className="col-span-11 flex-col flex gap-8 pl-12 pt-16">
                    <div className="flex items-center gap-16">
                        <span className="text-left text-4xl font-extrabold text-zinc-800">Cocoa Topping</span>   
                    </div>
                    <div className="col-span-6 flex flex-wrap gap-x-16 gap-y-8">
                        {availableCocoaToppings.map((cocoa, index) => (
                            <div key={index} onClick={() => {setCocoaOption(cocoa)}} className={`w-[8rem] h-[8rem] text-white font-semibold flex justify-center items-center rounded-full cursor-pointer select-none capitalize transition-all duration-100 ${cocoa === currentCocoaOption && ('scale-110')}`} style={{backgroundColor: `${cocoa === currentCocoaOption ? mainColor : '#18181b'}`}}>
                                {cocoa}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-1 content-[]"></div>
                <div className="col-span-11 flex-col flex gap-8 pl-12 pt-16">
                    <div className="flex items-center gap-16">
                        <span className="text-left text-4xl font-extrabold text-zinc-800">Whipped Cream</span>   
                    </div>
                    <div className="col-span-6 flex flex-wrap gap-x-16 gap-y-8">
                        {availableWhippedCream.map((cream, index) => (
                            <div key={index} onClick={() => {setWhippedCream(cream)}} className={`w-[8rem] h-[8rem] text-white font-semibold flex justify-center items-center rounded-full cursor-pointer select-none capitalize transition-all duration-100 ${cream === currentWhippedCream && ('scale-110')}`} style={{backgroundColor: `${cream === currentWhippedCream ? mainColor : '#18181b'}`}}>
                                {cream}
                            </div>
                        ))}
                    </div>
                </div>

                
            </div>
        </div>
    );
}
