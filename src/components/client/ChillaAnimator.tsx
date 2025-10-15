"use client"

import React from 'react';
import {gsap} from 'gsap';
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

function ChillaAnimator() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: "#chilla-section",
            start: "top top",
            end: `top+=${window.innerHeight * 2} top`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;

                if (progress <= 0.5) {
                    const slideProgress = progress / 0.5;

                    const texts = document.querySelectorAll(".chilla-text");
                    gsap.set(texts[0], { x: `${-100 + slideProgress * 100}%`});
                    gsap.set(texts[1], { x: `${100 - slideProgress * 100}%`});
                    gsap.set(texts[2], {
                        scale: "0",
                        transformOrigin: "center center",
                        y: "-150%"
                    });
                }
                else {
                    const scaleProgress = (progress -0.5) / 0.5;
                    const texts = document.querySelectorAll(".chilla-text");
                    gsap.set(texts[0], { x: 0, y: `${scaleProgress * -50}%`});
                    gsap.set(texts[1], { x: 0, y: `${scaleProgress * 50}%`});
                    gsap.set(texts[2], {
                        scale: `${scaleProgress}`,
                        transformOrigin: "center center",
                        y: "-150%"
                    });
                }
            },
        });
    });

    return (
        <div className="absolute"></div>
    );
}

export default ChillaAnimator;