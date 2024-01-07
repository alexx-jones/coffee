// pages/_app.js

import Navbar from '@/components/nav/navbar';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import '@/styles/globals.css'


function MyApp({ Component, pageProps }) {
  const [displayNav, setDisplayNav] = useState(false);
  const currentPath = usePathname();

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
      {displayNav && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
