import React from 'react';
import CardAnimator from "@/components/client/cardAnimator";

function Cards() {
    return (
        <div>
            <div className="relative w-full flex flex-col gap-y-[25svh]">
                <div className="sticky-card relative w-full h-screen p-4">
                    <div className="w-full h-full bg-zinc-500 rounded-xl flex justify-start items-center">
                        <h2 className="sticky-card-title text-7xl ml-16 font-extrabold">Title</h2>
                    </div>
                </div>
                <div className="sticky-card relative w-full h-screen p-4 rounded-xl">
                    <div className="w-full h-full bg-zinc-600 rounded-xl flex justify-start items-center">
                        <h2 className="sticky-card-title text-7xl ml-16 font-extrabold">Title</h2>
                    </div>
                </div>
                <div className="sticky-card relative w-full h-screen p-4 rounded-xl">
                    <div className="w-full h-full bg-zinc-700 rounded-xl flex justify-start items-center">
                        <h2 className="sticky-card-title text-7xl ml-16 font-extrabold">Title</h2>
                    </div>
                </div>
            </div>
            <CardAnimator />
        </div>
    );
}

export default Cards;