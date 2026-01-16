"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projectsData";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectsPage() {
    useEffect(() => {
        AOS.init({ once: true, duration: 1000 });
    }, []);

    return (
        <main className="min-h-screen pt-24 bg-[#0F1419]">
            <section className="container max-w-6xl mx-auto px-6 py-12">
                <div
                    data-aos="fade-down"
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-[#FF6C0C]">Projects</span>
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Explore a collection of my recent work across various industries and technologies.
                        Click on any project to view more details and gallery images.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Link key={project.id} href={`/projects/${project.slug}`}>
                            <div
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="group bg-[#1a1f26] rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full"
                            >
                                <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-200">
                                    <Image
                                        src={`/${project.prefix}1.png`}
                                        alt={project.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    {project.category && (
                                        <div className="absolute top-4 right-4 bg-[#FF6C0C] text-white px-3 py-1 rounded-full text-xs font-semibold">
                                            {project.category}
                                        </div>
                                    )}
                                </div>
                                <div className="p-6 bg-[#1a1f26]">
                                    <h3 className="text-xl font-bold text-white mb- group-hover:text-[#FF6C0C] transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                                        <span className="text-xs text-gray-500">
                                            {project.imageCount} image{project.imageCount !== 1 ? "s" : ""}
                                        </span>
                                        <span className="text-[#FF6C0C] font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                            View →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <section className="bg-gradient-to-r from-[#FF6C0C] to-[#e55b00] text-white py-16 mt-20">
                <div className="container max-w-6xl mx-auto px-6 text-center" data-aos="fade-up">
                    <h2 className="text-3xl font-bold mb-4">Interested in a project like these?</h2>
                    <p className="text-lg mb-8 opacity-90">
                        Let&apos;s discuss your next great idea and bring it to life.
                    </p>
                    <Link href="/contact">
                        <button className="px-8 py-3 bg-white text-[#FF6C0C] font-semibold rounded-md hover:bg-gray-100 transition">
                            Get In Touch
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
