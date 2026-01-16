"use client"
import { useEffect, useRef, useState } from "react";
import { FaCode } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";
import {  FaSearch } from "react-icons/fa";
import { RiSpeedUpLine } from "react-icons/ri";

const Cards = () => {
    const cardsData = [
        { id: 1, title: "WordPress", desc: "Full-stack development, theme customization & maintenance.", progress: 95, icon: <FaCode /> },
        { id: 2, title: "Duda", desc: "Certified expert in custom Duda design and white-labeling.", progress: 90, icon: <MdOutlineComputer /> },
        { id: 3, title: "Squarespace", desc: "Layout optimization, Fluid Engine mastery & custom CSS.", progress: 92, icon: <FaDatabase /> },
        { id: 4, title: "SEO", desc: "Technical audit, schema markup & on-page strategy.", progress: 87, icon: <FaSearch /> },
        { id: 5, title: "Performance", desc: "Core Web Vitals, caching strategies & asset minification.", progress: 98, icon: <RiSpeedUpLine /> }
    ];
    const animations = ["fade-right", "fade-down", "fade-left", "fade-right", "fade-up"];

    const sectionRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-28 bg-[#1e2228]">
            <div className="max-w-6xl mx-auto px-6">
                <div data-aos="fade-up-right" className="mb-16">
                    <h6 className="text-[#FF6C0C] font-semibold tracking-widest mb-3">EXPERTISE</h6>
                    <h2 className="text-4xl font-bold text-white mb-4">Technical Proficiency</h2>
                    <p className="text-slate-300 max-w-2xl leading-relaxed">
                        I leverage a specialized toolkit to build websites that don&apos;t just look good,
                        but function flawlessly across all devices and search engines.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cardsData.map((card, index) => (
                        <div  data-aos={animations[index % animations.length]} key={card.id} className="bg-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-[#FF6C0C] transition">
                            <div className="text-[#FF6C0C] text-3xl mb-4">{card.icon}</div>
                            <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                            <p className="text-slate-400 text-sm mb-6">{card.desc}</p>
                            <div className="flex items-center gap-4">
                                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <div className={`h-full bg-[#FF6C0C] transition-all duration-1000`} style={{ width: inView ? `${card.progress}%` : "0%" }}></div>
                                </div>
                                <span className="text-sm font-semibold text-white">{card.progress}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cards;
