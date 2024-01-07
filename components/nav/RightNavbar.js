import NavItem from "./NavItem";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from "react";


export default function RightNavbar() {
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
        <div className="w-full flex justify-end items-center gap-8 text-white">
            {navbarItems.map((item) => (
                <NavItem active={item.link === currentPath} text={item.text} link={item.link} key={item.id}/>
            ))}
        </div>
    )
}