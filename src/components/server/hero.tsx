import React from 'react';
import HeroAnimator from "@/components/client/heroAnimator";

function Hero() {
    return (
        <div id="hero" className="relative w-full h-screen overflow-hidden z-20">
            <h1
                id="hero-heading"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         text-8xl w-[500vw] text-center z-10 font-bold"
            >
                Intro Text
            </h1>
            <HeroAnimator />
        </div>
    );
}

export default Hero;