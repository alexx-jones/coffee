import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { drinkEncoding } from "@/pages/api/server/encodeDecodeOrder/values";

function wordToInteger(value) {
    const wordToNumber = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
    };

    return wordToNumber[value] !== undefined ? wordToNumber[value] : null;
}

const CoffeeCustomiser = ({ coffeeSelected, coffeeArray, mainColor }) => {
    const coffee = coffeeArray[coffeeSelected];
    const [currentOptions, setCurrentOptions] = useState({});

    useEffect(() => {
        const initialOptions = {
            milkType: coffee.milkType,
            syrupFlavour: coffee.syrupFlavour,
            syrupShots: 1,
            size: coffee.size,
            decaf: coffee.decaf,
            shots: coffee.shots,
            chocolatePowderTopping: coffee.chocolatePowderTopping,
            hotCold: coffee.hotCold,
            whippedCream: coffee.whippedCream,
        };
        setCurrentOptions(initialOptions);
    }, [coffee]);

    const handleOptionChange = (option, value) => {
        setCurrentOptions({ ...currentOptions, [option]: value });
    };

    const increaseOption = (option) => {
        if (option === 'syrupShots' && currentOptions.syrupShots < 3) {
            handleOptionChange(option, currentOptions.syrupShots + 1);
        }
    };

    const decreaseOption = (option) => {
        if (option === 'syrupShots' && currentOptions.syrupShots > 1) {
            handleOptionChange(option, currentOptions.syrupShots - 1);
        }
    };

    const renderOptions = (optionsArray, optionName) => {
        return optionsArray.map((option, index) => (
            <div key={index} onClick={() => handleOptionChange(optionName, option)} className={`w-[8rem] h-[8rem] text-white font-semibold flex justify-center items-center rounded-full cursor-pointer select-none capitalize transition-all duration-100 ${option === currentOptions[optionName] && ('scale-110')}`} style={{backgroundColor: `${option === currentOptions[optionName] ? mainColor : '#18181b'}`}}>
                {option}
            </div>
        ));
    };

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
                    <div className="flex items-center w-full justify-between pr-20">
                        <p className="text-5xl font-extrabold text-zinc-800 w-full text-left"> Customize your <span style={{color: mainColor}}>{coffee.name}</span> </p>
                        <div className=' w-full flex justify-end px-12'>
                            <button style={{ backgroundColor: mainColor}} className={`w-[14rem] h-[4rem] rounded-xl flex gap-8 items-center justify-center text-white text-lg font-bold drop-shadow-2xl`}>
                                <span>Order</span> <FontAwesomeIcon icon={faChevronRight} className={`transition-all duration-1000`} />
                            </button>
                        </div>
                    </div>
                    <div className="content-[] h-[1px] w-2/3" style={{backgroundColor: mainColor}}></div>
                </div>
                
                {/* Options */}
                {[
                    { name: "Size", id: "size" },
                    { name: "Milk Type", id: "milkType" },
                    { name: "Temperature", id: "hotCold" },
                    { name: "Decaf", id: "decaf" },
                    { name: "Syrup Flavour", id: "syrupFlavour" },
                    { name: "Chocolate Topping", id: "chocolatePowderTopping" },
                    { name: "Whipped Cream", id: "whippedCream" }
                ].map((option, index) => (
                    <div key={index} className="col-span-11 flex-col flex gap-8 pl-12 pt-16">
                        <div className="flex items-center gap-16">
                            <span className="text-left text-4xl font-extrabold text-zinc-800">{option.name}</span>
                            {option.id === 'syrupFlavour' &&
                                <div className="text-zinc-700 select-none">
                                    <span className="text-xl font-bold mr-6">Shots: </span>
                                    <FontAwesomeIcon icon={faCirclePlus} onClick={() => increaseOption('syrupShots')} className="cursor-pointer" />
                                    <span className="text-xl font-bold mx-6">{currentOptions.syrupShots}</span>
                                    <FontAwesomeIcon icon={faCircleMinus} onClick={() => decreaseOption('syrupShots')} className="cursor-pointer"/>
                                </div>
                            }
                        </div>
                        <div className="col-span-6 flex flex-wrap gap-x-16 gap-y-8">
                            {renderOptions(Object.keys(drinkEncoding[option.id]).filter(key => !key.includes("not-bound")), option.id)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoffeeCustomiser;
