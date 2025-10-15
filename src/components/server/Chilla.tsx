import React from 'react';
import ChillaAnimator from "@/components/client/ChillaAnimator";

function Chilla() {
    return (
        <div>
            <div id="chilla-section" className="w-full h-screen">
                <div className="absolute w-full h-full flex flex-col justify-center items-center">
                    <p className="chilla-text relative w-full text-center text-9xl font-extrabold translate-x-[-100%]">
                        I Am Just
                    </p>
                    <p className="chilla-text relative w-full text-center text-9xl font-extrabold translate-x-[100%]">
                        A Chilla
                    </p>
                    <p className="chilla-text relative text-center absolute text-9xl font-extrabold scale-0 z-10">
                        A Tough Chilla
                    </p>
                </div>
            </div>
            <ChillaAnimator />
        </div>
    );
}

export default Chilla;