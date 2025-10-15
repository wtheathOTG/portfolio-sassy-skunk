import React from 'react';
import Image from "next/image";
import {galleryImages} from "@/galleryData";
import GalleryAnimator from "@/components/client/GalleryAnimator";

function Gallery() {
    return (
        <div id="gallery" className="w-full h-screen [perspective:2000px]">
            <div className="absolute top-0 left-0 w-full h-full transform-gpu [transform-style: preserve-3d]">
                {galleryImages.map((image, i) => (
                    <div
                        key={i}
                        className="gallery-image absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                     w-[500px] h-[350px] will-change-transform"
                    >
                        <Image
                            src={image}
                            alt="image"
                            fill
                            className="w-full h-screen object-cover"
                        />
                    </div>
                ))}
            </div>
            <GalleryAnimator />
        </div>
    );
}

export default Gallery;