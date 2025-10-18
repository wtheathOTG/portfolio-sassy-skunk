import React from 'react';

function ParallaxGallery() {
    return (
        <div className="relative w-full h-[300svh]">
            <div
                data-speed="0.65"
                className="absolute top-1/4 left-4/10 w-[400px] aspect-square bg-zinc-500 rounded-md"
            ></div>
            <div
                data-speed="1"
                className="absolute top-1/3 left-3/4 w-[400px] aspect-square bg-zinc-500 rounded-md"
            ></div>
            <div
                data-speed="1.2"
                className="absolute top-1/2 left-2/10 w-[400px] aspect-square bg-zinc-500 rounded-md"
            ></div>
            <div
                data-speed="1.4"
                className="absolute top-1/3 left-1/20 w-[400px] aspect-square bg-zinc-500 rounded-md"
            ></div>
            <div
                data-speed="1"
                className="absolute top-2/3 left-9/20 w-[400px] aspect-square bg-zinc-500 rounded-md"
            ></div>
            <div
                data-speed="1.4"
                className="absolute top-3/4 left-2/30 w-[400px] aspect-square bg-zinc-500 rounded-md"
            ></div>
            <div
                data-speed="0.8"
                className="absolute top-3/4 left-3/4 w-[400px] aspect-square bg-zinc-500 rounded-md"
            ></div>
        </div>
    );
}

export default ParallaxGallery;