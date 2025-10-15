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
           start: "top bottom",
           end: "top top",
           scrub: 1,
           onUpdate: (self) => {
               const texts = document.querySelectorAll(".chilla-text");
               gsap.set(texts[0], { x: `${-100 + self.progress * 100}%`});
               gsap.set(texts[1], { x: `${100 - self.progress * 100}%`});
           },
        });

        ScrollTrigger.create({
            trigger: "#chilla-section",
            start: "top top",
            end: `top+=${window.innerHeight} top`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            onUpdate: (self) => {
                const texts = document.querySelectorAll(".chilla-text");
                gsap.set(texts[0], { y: `${self.progress * -50}%`});
                gsap.set(texts[1], { y: `${self.progress * 50}%`});
                gsap.set(texts[2], {
                    scale: `${self.progress}`,
                    transformOrigin: "center center",
                    y: "-150%"
                });
            }
        });
    });

    return (
        <div className="fixed"></div>
    );
}

export default ChillaAnimator;