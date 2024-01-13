// pages/_app.js

import Navbar from '@/components/nav/navbar';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import '@/styles/globals.css'


function MyApp({ Component, pageProps }) {
  const [displayNav, setDisplayNav] = useState(false);
  const currentPath = usePathname();
  const [mainColor, setMainColor] = useState();
  const [colors, setColors] = useState([
    "#7D82B8",
    "#FF0054",
    "#FF5400",
    "#048A81",
    "#2D936C",
    "#DB3069",
    "#F39237",
    "#0E79B2",
    "#3F826D",
    "#4B296B",
    "#3B60E4",
    "#E6AF2E",
    "#8D3B72",
  ]);
  useEffect(() => {
    setMainColor(colors[Math.floor(Math.random()*colors.length)]);
  }, [colors]);

  console.log(mainColor);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/config.json");
        const data = await response.json();
        
        // Check if "nonNavbar" property exists in the JSON data
        const nonNavItems = data.nonNavbar || [];

        if (!nonNavItems.includes(currentPath)) {
          setDisplayNav(true);
        }
      } catch (error) {
        console.error("Error fetching navbar items:", error);
      }
    };

    fetchData();
  }, [currentPath]); // Pulling Navbar Items

  return (
    <>
      {displayNav && <Navbar mainColor={mainColor} />}
      {mainColor && (<Component {...pageProps} mainColor={mainColor} />)}
    </>
  );
}

export default MyApp;
