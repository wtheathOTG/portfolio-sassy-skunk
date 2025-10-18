"use client"

import React from 'react';
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

function HeroAnimator() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const heroHeading = document.getElementById("hero-heading")!;

        ScrollTrigger.create({
            trigger: "#hero",
            start: "top top",
            end: `+=${window.innerHeight * 3}`,
            pin: true,
            pinSpacing: false,
            scrub: 1,
            onUpdate: (self) => {
                  const progress = self.progress;

                  if (progress == 0) {
                      heroHeading.style.letterSpacing = "0";
                  }
                  else {
                      heroHeading.style.letterSpacing = `${progress * progress * 20}rem`;
                  }

                  if (progress >= 0.95) {
                      gsap.set(heroHeading, {opacity: 0});
                  }
                  else if (progress >= 0.7) {
                      const fadeProgress = (progress - 0.7) / 0.25;
                      gsap.set(heroHeading, {opacity: 1 - fadeProgress});
                  }
                  else {
                      gsap.set(heroHeading, {opacity: 1});
                  }

            },
        });
    })

    return (
        <div className="absolute"></div>
    );
}

export default HeroAnimator;