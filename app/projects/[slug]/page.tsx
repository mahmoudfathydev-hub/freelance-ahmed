"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, projects } from "@/lib/projectsData";
import ImageGallery from "@/components/ImageGallery";
import { FaArrowLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const project = getProjectBySlug(slug);

    useEffect(() => {
        AOS.init({ once: true, duration: 1000 });
    }, []);

    if (!project) {
        return (
            <main className="min-h-screen pt-24 bg-[#0F1419]">
                <div className="container max-w-6xl mx-auto px-6 py-12 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
                    <p className="text-gray-400 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
                    <Link href="/projects">
                        <button className="px-6 py-3 bg-[#FF6C0C] text-white rounded-md hover:bg-[#e55b00] transition">
                            Back to Projects
                        </button>
                    </Link>
                </div>
            </main>
        );
    }

    const projectImages = Array.from({ length: project.imageCount }, (_, i) => `/${project.prefix}${i + 1}.png`);

    return (
        <main className="min-h-screen pt-24 bg-[#0F1419]">
            <div className="container max-w-6xl mx-auto px-6 py-12">
                <Link href="/projects">
                    <button className="flex items-center gap-2 text-[#FF6C0C] hover:text-[#e55b00] font-semibold mb-8 transition">
                        <FaArrowLeft />
                        Back to Projects
                    </button>
                </Link>

                <div data-aos="fade-down" className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">{project.name}</h1>
                        {project.category && (
                            <span className="bg-[#FF6C0C] text-white px-4 py-2 rounded-full text-sm font-semibold">{project.category}</span>
                        )}
                    </div>
                    <p className="text-lg text-gray-300 max-w-3xl">{project.description}</p>
                </div>

                <div data-aos="fade-up">
                    <ImageGallery images={projectImages} title={project.name} />
                </div>

                <div data-aos="fade-up" data-aos-delay="200" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-[#1a1f26] p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-white mb-2">Total Images</h3>
                        <p className="text-3xl font-bold text-[#FF6C0C]">{project.imageCount}</p>
                    </div>
                    <div className="bg-[#1a1f26] p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-white mb-2">Category</h3>
                        <p className="text-xl text-gray-300">{project.category || "General"}</p>
                    </div>
                    <div className="bg-[#1a1f26] p-6 rounded-lg">
                        <h3 className="text-lg font-bold text-white mb-2">Project ID</h3>
                        <p className="text-xl text-gray-300 capitalize">{project.slug}</p>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="300" className="mt-16">
                    <h2 className="text-3xl font-bold text-white mb-8">Other Projects</h2>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                        className="pb-12"
                    >
                        {projects.filter((p) => p.slug !== slug).map((relatedProject) => (
                            <SwiperSlide key={relatedProject.id}>
                                <Link href={`/projects/${relatedProject.slug}`}>
                                    <div className="group bg-[#1a1f26] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full border border-gray-700">
                                        <div className="relative w-full h-48 overflow-hidden bg-gray-700">
                                            <Image src={`/${relatedProject.prefix}1.png`} alt={relatedProject.name} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-bold text-white group-hover:text-[#FF6C0C] transition">{relatedProject.name}</h3>
                                            <p className="text-sm text-gray-400 mt-2 line-clamp-1">{relatedProject.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div data-aos="fade-up" data-aos-delay="400" className="mt-16 bg-gradient-to-r from-[#FF6C0C] to-[#e55b00] text-white p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
                    <p className="text-lg mb-6">Let&apos;s discuss how we can create something amazing.</p>
                    <Link href="/signin">
                        <button className="px-8 py-3 bg-white text-[#FF6C0C] font-semibold rounded-md hover:bg-gray-100 transition">Get In Touch</button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
