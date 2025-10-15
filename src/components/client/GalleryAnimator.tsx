"use client"

import React from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/SplitText";

function GalleryAnimator() {
    useGSAP(() => {
       gsap.registerPlugin(ScrollTrigger, SplitText);

        initGalleryAnimations();
        window.addEventListener("resize", initGalleryAnimations);

        function initGalleryAnimations() {
            const images = document.querySelectorAll(".gallery-image");

            const scatterDirections : {x: number; y: number}[] = [
                { x: 1.3, y: 0.7 },
                { x: -1.5, y: 1.0 },
                { x: 1.1, y: -1.3 },
                { x: -1.7, y: -0.8 },
                { x: 0.8, y: 1.5 },
                { x: -1.0, y: -1.4 },
                { x: 1.6, y: 0.3 },
                { x: -0.7, y: 1.7 },
                { x: 1.2, y: -1.6 },
                { x: -1.4, y: 0.9 },
                { x: 1.8, y: -0.5 },
                { x: -1.1, y: -1.8 },
                { x: 0.9, y: 1.8 },
                // { x: -1.9, y: 0.4 },
                // { x: 1.0, y: -1.9 },
                // { x: -0.8, y: 1.9 },
                // { x: 1.7, y: -1.0 },
                // { x: -1.3, y: -1.2 },
                // { x: 0.7, y: 2.0 },
                // { x: 1.25, y: -0.2 },
            ];

            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const isMobile = screenWidth < 1000;
            const scatterMultiplier = isMobile ? 2.5 : 0.5;

            const startPositions = Array.from(images).map(() => ({
                x: 0,
                y: 0,
                z: -1000,
                scale: 0,
            }));

            const endPositions = scatterDirections.map((dir) => ({
                x: dir.x * screenWidth * scatterMultiplier,
                y: dir.y * screenWidth * scatterMultiplier,
                z: 2000,
                scale: 1,
            }));

            images.forEach((image, i) => {
                gsap.set(image, startPositions[i]);
            });

            ScrollTrigger.create({
                trigger: "#gallery",
                start: `top top`,
                end: `${window.innerHeight * 5}px`,
                pin: true,
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;

                    images.forEach((image, i) => {
                        const stagger = i * 0.04;
                        const scaleMultiplier = isMobile ? 4 : 2;

                        const imageProgress = Math.max(0, (progress - stagger) * 3);
                        const start = startPositions[i];
                        const end = endPositions[i];

                        const zVal = gsap.utils.interpolate(start.z, end.z, imageProgress);
                        const scaleVal = gsap.utils.interpolate(
                            start.scale,
                            end.scale,
                            imageProgress * scaleMultiplier,
                        );
                        const xVal = gsap.utils.interpolate(start.x, end.x, imageProgress);
                        const yVal = gsap.utils.interpolate(start.y, end.y, imageProgress);

                        let opacityVal = 1;
                        if (imageProgress === 1) {
                            opacityVal = 0;
                        }
                        if (imageProgress >= 0.9){
                            opacityVal = gsap.utils.interpolate(
                                1,
                                0,
                                (imageProgress - 0.9) / 0.1
                            );
                        }

                        gsap.set(image, {
                            x: xVal,
                            y: yVal,
                            z: zVal,
                            scale: scaleVal,
                            opacity: opacityVal,
                        })
                    });
                },
            });
        }

        const galleryText = document.getElementById("gallery-text");
        const gtSplit = new SplitText(galleryText, {type: "words"});
        gsap.set(gtSplit.words, {y: 30, opacity: 0,});

        gsap.fromTo(gtSplit.words, {
            y: 30,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#gallery",
                start: `top top`,
                end: `+=${window.innerHeight * 2.5}px`,
                scrub: 1,
            }
        });
        gsap.fromTo(gtSplit.words, {
            y: 0,
            opacity: 1,
        }, {
            y: -60,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#gallery",
                start: `+=${window.innerHeight * 2.5}px`,
                end: `+=${window.innerHeight * 3.5}px`,
                scrub: 1,
            }
        });
    });

    return (
        <div className="absolute"></div>
    );
}

export default GalleryAnimator;