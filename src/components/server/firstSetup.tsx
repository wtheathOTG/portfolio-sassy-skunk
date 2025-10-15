import React from 'react';
import Gallery from "@/components/server/gallery";
import Chilla from "@/components/server/Chilla";
import TitleAnimator from "@/components/client/TitleAnimator";

function FirstSetup() {
    return (
        <div className="bg-zinc-950">
            <div id="title-container" className="flex justify-center items-center w-full h-screen">
                <h1 id="title" className="text-9xl font-extrabold">I Am Carter</h1>
            </div>
            <Gallery />
            <div className="w-full h-[300svh]"></div>
            <Chilla />
            <div className="w-full h-screen bg-zinc-900"></div>
            <TitleAnimator />
        </div>
    );
}

export default FirstSetup;