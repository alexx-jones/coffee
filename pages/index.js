import CoffeeSelector from '@/components/coffee/CoffeeSelector'
import Navbar from '@/components/nav/navbar';
import { useState } from "react";


export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
        <Navbar />
    </main>
  )
}
