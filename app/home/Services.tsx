import { IoIosColorPalette } from "react-icons/io";
import { IoRocket } from "react-icons/io5";
import { IoCodeSlashSharp } from "react-icons/io5";
const Services = () => {
    const cards = [
        {
            id: 1,
            name: "Web Development",
            desc: "Building scalable and robust web applications with modern frameworks and best practices.",
            icon: <IoCodeSlashSharp size={36}/>
        },
        {
            id: 2,
            name: "UI/UX Design",
            desc: "Crafting intuitive and beautiful interfaces that provide seamless user experiences across all devices.",
            icon: <IoIosColorPalette size={36} />
        },
        {
            id: 3,
            name: "Optimization",
            desc: "Improving performance, SEO rankings, and accessibility to ensure your business reaches its full potential.",
            icon: <IoRocket size={36} />
        },
    ];
    return (
        <section className="w-full bg-[#1a1a1a] text-white py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
                    <div data-aos="fade-right">
                        <h6 className="text-[#FF6C0C] uppercase tracking-widest mb-2">Specialization</h6>
                        <h2 className="text-4xl md:text-5xl font-bold">Expertise & Services</h2>
                    </div>
                    <p data-aos="fade-left" className="text-gray-400 max-w-md mt-4 leading-relaxed">
                        Comprehensive digital solutions from initial strategy to final deployment.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map(card => (
                        <div
                        data-aos="zoom-in-up"
                            key={card.id}
                            className="group bg-[#181818] border border-[#2a2a2a] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-3 hover:border-[#FF6C0C]"
                        >
                            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#FF6C0C]/10 text-[#FF6C0C] mb-6 group-hover:bg-[#FF6C0C] group-hover:text-white transition">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{card.name}</h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Services;