"use client"

import React from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import {useGSAP} from "@gsap/react";

function CardAnimator() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        const cards = document.querySelectorAll(".sticky-card");
        cards.forEach((card, i) => {
            const title = card.querySelector(".sticky-card-title");
            const splitTitle = SplitText.create(title, {
                type: "chars",
                mask: "chars",
            });

            gsap.set(splitTitle.chars, {x: "100%"});

            ScrollTrigger.create({
                trigger: card,
                start: "top 40%",
                onEnter: () => {
                   gsap.set(splitTitle.chars, {x: "100%"});
                   gsap.to(splitTitle.chars, {
                      x: 0,
                      stagger: 0.08,
                      duration: 0.6,
                      ease: "power1.out",
                   });
                },
                onLeaveBack: () => {
                   gsap.to(splitTitle.chars, {
                       x: "-100%",
                       stagger: 0.03,
                       duration: 0.6,
                       ease: "power1.out",
                   });
                },
            });

            const isLast = i === cards.length - 1;
            ScrollTrigger.create({
                trigger: card,
                start: "top top",
                endTrigger: isLast ? null : cards[cards.length - 1],
                end: isLast ? `+=${window.innerHeight/4}` : "top top",
                pin: true,
                pinSpacing: isLast,
            });

            if (isLast) return;
            ScrollTrigger.create({
                trigger: cards[i + 1],
                start: "top bottom",
                end: "top top",
                scrub: 1,
                onUpdate: (self) => {
                    gsap.set(card, {
                        scale: 1 - self.progress * 0.25,
                        opacity: 1 - self.progress,
                    });
                },
            });
        });
    })

    return (
        <div className="absolute"></div>
    );
}

export default CardAnimator;