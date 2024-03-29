import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavItem from "./NavItem";
import { redirect, usePathname } from 'next/navigation';
import { useState, useEffect } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function RightNavbar({mainColor}) {
    const router = useRouter();
    const [navbarItems, setNavbarItems] = useState([]);
    const currentPath = usePathname();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/config.json");
                const data = await (response.json());
                setNavbarItems(data.navbarItems);
            } catch (error) {
                console.error("Error fetching navbar items:", error);
            }
        };

        fetchData();
    }, []); // Pulling Navbar Items

    return (
        <div className="w-full flex justify-end items-center gap-14 text-zinc-800 mask mask-composite">
            {navbarItems.map((item) => (
                <NavItem active={item.link === currentPath} text={item.text} link={item.link} key={item.id} router={router} mainColor={mainColor}/>
            ))}
            <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center cursor-pointer">
                <FontAwesomeIcon icon={faUser} onClick={() => {router.push('/account')}} className=" saturate-150 brightness-[140%]" style={{color: mainColor}}/>
            </div>
        </div>
    )
}
