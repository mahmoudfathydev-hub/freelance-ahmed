import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Hero = () => {
    return (
        <div className="w-full bg-[#181A1B] text-white">
            <div className="container max-w-310 mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-0 py-16 md:py-32 gap-10">
                <div className="left md:w-1/2 flex flex-col gap-6">
                    <h6 data-aos="fade-down" className="text-orange-500 font-medium tracking-wider">Available for new projects</h6>
                    <h2 data-aos="fade-right" className="text-4xl md:text-6xl font-bold leading-tight">WEBSITE <br /> DEVELOPER</h2>
                    <p data-aos="fade-up-right" className="text-gray-300 text-lg md:text-xl leading-relaxed">Welcome to my digital world! I’m Ahmed Maher, a <br /> Web Specialist and Developer dedicated to <br /> building high-performance, beautiful web <br /> experiences that solve real problems.</p>
                    <div data-aos="zoom-in" className="btns flex flex-col sm:flex-row gap-4 mt-4">
                        <Link href="/projects" className="px-6 py-3 bg-[#FF6C0C] hover:bg-[#e55b00] rounded-md text-white font-semibold text-center transition">View Projects</Link>
                        <a href="/CV.pdf" download className="px-6 py-3 border-2 border-[#FF6C0C] hover:bg-[#FF6C0C] hover:text-white rounded-md font-semibold text-center transition">Download CV</a>
                    </div>
                </div>
                <div className="right md:w-1/2 flex justify-center md:justify-end relative">
                    <div data-aos="fade-up-left" className="w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-md drop-shadow-2xl relative">
                        <Image src="/mainImg.png" alt="Hero Image" width={384} height={384} className="object-cover w-full h-full" />
                        <div data-aos="fade-right" className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[90%] bg-gray-800 bg-opacity-80 text-white rounded-lg p-4 flex justify-around items-center text-sm md:text-base">
                            <div className="flex flex-col items-center gap-1">
                                <h6 className="font-semibold">Experience</h6>
                                <span>5+ Years</span>
                            </div>
                            <span>|</span>
                            <div className="flex flex-col items-center gap-1">
                                <h6 className="font-semibold">Projects</h6>
                                <span>+15</span>
                            </div>
                            <span>|</span>
                            <div className="flex flex-col items-center gap-1">
                                <h6 className="font-semibold">Clients</h6>
                                <span>+10</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
