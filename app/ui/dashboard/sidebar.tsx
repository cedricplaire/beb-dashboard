'use client';

import { useState } from "react";  
import AcmeLogo from "@/app/ui/acme-logo";
import NavLinks from "@/app/ui/dashboard/nav-links";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true); 

  const handleIsOpen = () => {
    setIsOpen(!isOpen); 
  }

    return (
    <div className={`h-full ${isOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white transition-width duration-300`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 ml-1 border-b border-gray-600">
            <h1 className={`text-lg font-semibold ${isOpen ? 'block' : 'hidden'}`}>Dashboard</h1>
            <button title="switch bar" type="button" onClick={handleIsOpen} className="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </button>
        </div>
        <div className="flex items-center justify-between py-4 pl-4 border-b border-gray-700">
            <AcmeLogo open={isOpen} />
        </div> 
        <NavLinks open={isOpen} />
      </div>
    </div>
  );
}