import { useRouter } from "next/router";

export default function NavItem({ active, text, link, router, mainColor }) {
    return (
        <div 
        className={` ${active ? "font-extrabold cursor-default saturate-150 brightness-150" : "font-semibold cursor-pointer"}`} 
        onClick={active ? null : () => {router.push(link)}}
        style={{color: `${active ? mainColor : 'white'}`}}
        >
            {text}
        </div>
    );
}