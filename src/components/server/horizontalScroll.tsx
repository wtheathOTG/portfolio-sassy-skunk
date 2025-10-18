import React from 'react';
import HorizontalScrollAnimator from "@/components/client/HorizontalScrollAnimator";

function HorizontalScroll() {
    return (
        <div
            id="horizontal-scroll"
            className="relative w-full h-screen overflow-hidden z-[-10]"
        >
            <div
                id="horizontal-scroll-wrapper"
                className="absolute top-0 left-0 w-[300%] h-full flex justify-between items-center"
            >
                <div className="horizontal-scroll-column w-screen h-full">
                    <div
                        id="horizontal-scroll-scale"
                        className="relative w-full h-full scale-0 bg-zinc-500"
                    ></div>
                </div>
                <div className="horizontal-scroll-column bg-zinc-800 w-screen h-full"></div>
                <div className="horizontal-scroll-column bg-zinc-500 w-screen h-full"></div>
            </div>
            <HorizontalScrollAnimator />
        </div>
    );
}

export default HorizontalScroll;