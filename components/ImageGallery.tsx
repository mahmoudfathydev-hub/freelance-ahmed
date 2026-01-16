"use client";
import { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

interface ImageGalleryProps {
    images: string[];
    title: string;
    initialIndex?: number;
}

export default function ImageGallery({
    images,
    title,
    initialIndex = 0,
}: ImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const goToImage = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="w-full">
            {/* Main Image Display */}
            <div className="relative w-full bg-black rounded-lg overflow-hidden mb-6">
                <div className="relative w-full h-96 md:h-[500px] lg:h-[600px]">
                    <Image
                        src={images[currentIndex]}
                        alt={`${title} - Image ${currentIndex + 1}`}
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#FF6C0C] hover:bg-[#e55b00] text-white p-2 rounded-full transition z-10"
                    aria-label="Previous image"
                >
                    <FaArrowLeft size={24} />
                </button>
                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#FF6C0C] hover:bg-[#e55b00] text-white p-2 rounded-full transition z-10"
                    aria-label="Next image"
                >
                    <FaArrowRight size={24} />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-4 overflow-x-auto pb-4">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`relative shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${index === currentIndex
                                ? "border-[#FF6C0C] shadow-lg"
                                : "border-gray-300 hover:border-[#FF6C0C]"
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Image Info */}
            <div className="mt-6 text-center">
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                <p className="text-white mt-2">
                    Image {currentIndex + 1} of {images.length}
                </p>
            </div>
        </div>
    );
}
