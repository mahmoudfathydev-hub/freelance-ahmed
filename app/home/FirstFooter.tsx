import Link from "next/link";
const FirstFooter = () => {
    return (
        <section className="w-full bg-[#1A1D21] py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div data-aos="fade-up" data-aos-duration="1800" className="relative overflow-hidden rounded-3xl bg-linear-to-r from-[#FF6C0C] via-[#d4712f] to-[#1a1a1a] p-12 md:p-16 text-white shadow-2xl">
                    <div className="max-w-3xl flex flex-col items-center text-center mx-auto">
                        <h2 data-aos="fade-down" data-aos-duration="2200" className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            Ready to build something <br /> extraordinary?
                        </h2>
                        <p data-aos="fade-right" data-aos-duration="2500" className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
                            Let&apos;s collaborate to turn your vision into a high-performing digital reality.
                            <br />
                            Currently accepting new projects.
                        </p>
                        <Link
                            data-aos="fade-up-right"
                            data-aos-duration="2800"
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[#FF6C0C] font-semibold text-lg transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white shadow-lg"
                        >
                            Start a Project Today
                        </Link>
                    </div>
                    <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#FF6C0C]/30 rounded-full blur-3xl" />
                </div>
            </div>
        </section>
    );
};
export default FirstFooter;
