import React from 'react';
import Image from "next/image";
import {galleryImages} from "@/galleryData";
import GalleryAnimator from "@/components/client/GalleryAnimator";

function Gallery() {
    return (
        <div id="gallery" className="absolute w-full h-screen [perspective:2000px]">
            <div className="absolute top-0 left-0 w-full h-full transform-gpu [transform-style: preserve-3d]">
                {galleryImages.map((image, i) => (
                    <div
                        key={i}
                        className="gallery-image absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                     h-[450px] max-h-[450px] w-auto flex justify-center will-change-transform"
                    >
                        <Image
                            src={image}
                            alt="image"
                            className="h-full w-auto object-cover"
                            height={450}
                            width={0}
                            sizes="100vw"
                        />
                    </div>
                ))}
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <h2 id="gallery-text" className="text-7xl font-extrabold z-[-3000]">Live In The Moment...</h2>
            </div>
            <GalleryAnimator />
        </div>
    );
}

export default Gallery;