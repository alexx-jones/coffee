import Image from "next/image"
export default function LeftNavbar({mainColor}) {
    return (
        <div>
            <span 
            className="font-extrabold tracking-wide text-2xl saturate-150 brightness-150"
            style={{color: mainColor}}
            >logo</span>
        </div>
    )
}