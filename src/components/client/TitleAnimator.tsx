"use client"

import React from 'react';
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

function TitleAnimator() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

         const container = document.getElementById("title-container");
         const title = document.getElementById("title");

         ScrollTrigger.create({
             trigger: container,
             start: "top top",
             end: `+=${window.innerHeight * 1.3}`,
             pin: true,
             pinSpacing: false,
             scrub: 1,
             onUpdate: (self) => {
                 if (title) {
                     const progress = self.progress;
                     title.style.scale = `${1 + progress * 25}`;

                     if (progress == 1) {
                         title.style.opacity = "0";
                     }
                     else if (progress >= 0.5) {
                         title.style.opacity = `${1 - (progress - 0.5) / 0.5}`;
                     }
                     else {
                         title.style.opacity = "1";
                     }
                 }
             },
         })
    });

    return (
        <div className="absolute"></div>
    );
}

export default TitleAnimator;