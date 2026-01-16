import Image from "next/image";
import Link from "next/link";

const HeroAbout = () => {
    return (
        <section className="py-28">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div data-aos="fade-up-right" className="relative flex justify-center md:justify-start">
                    <div className="relative w-80 h-80 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#FF6C0C]/15 rotate-15 rounded-3xl"></div>
                        <Image src="/mainImg.png" alt="Hero Image" width={384} height={384} className="object-cover w-full rounded-2xl h-full z-10" />                    </div>
                </div>
                <div data-aos="fade-up-left">
                    <h6 className="text-[#FF6C0C] font-semibold tracking-widest mt-6 mb-3">ABOUT ME</h6>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                        Web Specialist & <br />
                        Developer <span className="text-[#FF6C0C]">bridging</span> <br />
                        design and <br />
                        performance.
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        I specialize in building high-performance, SEO-optimized websites using modern CMS platforms. With over 2.5 years of technical precision and minimalist design, I help brands establish a powerful digital presence.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        My approach combines rigorous technical optimization with a keen eye for user experience. Whether it&apos;s custom Duda implementations or complex WordPress architecture, I focus on delivering speed, accessibility, and measurable results.
                    </p>
                    <div className="mt-8 flex items-center gap-6">
                        <a href="/CV.pdf" download className="px-6 py-3 border-2 border-[#FF6C0C] text-[#FF6C0C] hover:bg-[#FF6C0C] hover:text-white rounded-md font-semibold transition-all duration-300">Download CV</a>
                        <Link href="/projects" className="px-6 py-3 bg-[#FF6C0C] hover:bg-[#e55b00] rounded-md text-white font-semibold text-center transition">View Projects</Link>                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroAbout;
