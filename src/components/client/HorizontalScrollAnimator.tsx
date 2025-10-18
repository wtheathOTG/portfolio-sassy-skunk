"use client"

import React from 'react';
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";


function HorizontalScrollAnimator() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const wrapper = document.getElementById("horizontal-scroll-wrapper");
        const scaler = document.getElementById("horizontal-scroll-scale");

        ScrollTrigger.create({
            trigger: "#horizontal-scroll",
            start: "top top",
            end: `+=${window.innerHeight * 5}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            onUpdate: (self) => {
                if (self.progress === 0) {
                    //gsap.set(scaler, {borderRadius: 200});
                    gsap.set(scaler, {scale: 0});
                    gsap.set(wrapper, {x: 0});
                }
                if (self.progress <= 0.4) {
                    const scaleProgress = self.progress / 0.4;

                    //gsap.set(scaler, {borderRadius: 200 - scaleProgress * 200});
                    gsap.set(scaler, {scale: scaleProgress});
                    gsap.set(wrapper, {x: 0});
                }
                else {
                    const scrollProgress = (self.progress - 0.4) / 0.6;

                    //gsap.set(scaler, {borderRadius: 0});
                    gsap.set(scaler, {scale: 1});
                    gsap.set(wrapper, {
                        x: `${(-2/3) * scrollProgress * 100}%`,
                    });
                }
            },
        });
    });

    return (
        <div className="absolute"></div>
    );
}

export default HorizontalScrollAnimator;