"use client"

import React from 'react';
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";

function SmoothScrollAnimator() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        ScrollSmoother.create({});
    });

    return (
        <div className="absolute"></div>
    );
}

export default SmoothScrollAnimator;