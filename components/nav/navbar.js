import LeftNavbar from "./LeftNavbar"
import RightNavbar from "./RightNavbar"
export default function Navbar() {
    return (
        <>
            <div className="w-screen relative top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-purple-400 border-[10px] border-white lg:min-h-[6rem] flex flex-col">
                <div className="w-full flex items-center justify-between py-4 px-8 flex-grow">
                    <LeftNavbar />
                    <RightNavbar />
                </div>
            </div>
        </>
    )
}