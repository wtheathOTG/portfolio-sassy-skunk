import React from "react";
import HorizontalScroll from "@/components/server/horizontalScroll";
import Hero from "@/components/server/hero";
import ParallaxGallery from "@/components/server/parallaxGallery";
import Cards from "@/components/server/cards";

export default function Home() {
  return (
   <div>
       <Hero />
       <HorizontalScroll />
       <ParallaxGallery />
       <Cards />
       <div id="outro" className="relative w-full h-screen flex justify-center items-center">
           <h1 className="text-7xl font-extrabold">Outro Text</h1>
       </div>
   </div>
  );
}
