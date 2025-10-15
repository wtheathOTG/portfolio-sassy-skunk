"use client"

import React from 'react';
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollSmoother} from "gsap/ScrollSmoother";

function GlobalAnimator() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollSmoother);
        ScrollSmoother.create({});
    });

    return (
        <div className="fixed"></div>
    );
}

export default GlobalAnimator;