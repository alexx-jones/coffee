import LeftNavbar from "./LeftNavbar"
import RightNavbar from "./RightNavbar"
export default function Navbar({mainColor}) {
    return (
        <>
            <div className="w-screen relative top-0 left-0 right-0 z-50 p-[10px] border-transparent lg:min-h-[6rem] flex flex-col">
                <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 w-full flex items-center justify-between py-4 px-8 flex-grow">
                    <LeftNavbar mainColor={mainColor} />
                    <RightNavbar mainColor={mainColor} />
                </div>
            </div>
        </>
    )
}