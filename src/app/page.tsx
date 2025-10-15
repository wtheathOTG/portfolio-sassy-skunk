import React from "react";
import HorizontalScroll from "@/components/server/horizontalScroll";

export default function Home() {
  return (
   <div>
       <div id="intro" className="relative w-full h-screen flex justify-center items-center">
           <h1 className="text-7xl font-extrabold">Intro Text</h1>
       </div>
       <HorizontalScroll />
       <div id="outro" className="relative w-full h-screen flex justify-center items-center">
           <h1 className="text-7xl font-extrabold">Outro Text</h1>
       </div>
   </div>
  );
}
