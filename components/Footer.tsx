import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="w-full bg-black text-gray-400 pt-20 pb-10">
            <div className="max-w-310 mx-auto px-6 flex flex-col gap-16">
                <div data-aos="fade-up-right" className="flex flex-col md:flex-row justify-between gap-14">
                    <div className="max-w-md relative pt-16">
                        <Image
                            src="/logo-3.png"
                            alt="logo"
                            width={150}
                            height={50}
                            className="absolute -top-15 left-0 object-contain"
                        />
                        <p className="leading-relaxed text-gray-400">
                            Web Developer specialized in building modern, high-performance websites
                            and digital experiences that deliver real business value.
                        </p>
                    </div>
                    <div data-aos="fade-down" className="flex flex-col">
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="/" className="hover:text-[#FF6C0C] transition">Home</Link></li>
                            <li><Link href="/about" className="hover:text-[#FF6C0C] transition">About</Link></li>
                            <li><Link href="/projects" className="hover:text-[#FF6C0C] transition">Projects</Link></li>
                            <li><Link href="/contact" className="hover:text-[#FF6C0C] transition">Contact</Link></li>
                        </ul>
                    </div>
                    <div data-aos="fade-up-left" className="flex flex-col">
                        <h4 className="text-white font-semibold mb-6">Let&apos;s Connect</h4>
                        <div className="flex items-center gap-4 mb-6">
                            <a href="#" className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1a1a1a] hover:bg-[#FF6C0C] text-white transition">
                                <FaGithub />
                            </a>
                            <a href="#" className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1a1a1a] hover:bg-[#FF6C0C] text-white transition">
                                <FaLinkedin />
                            </a>
                            <a href="mailto:your@email.com" className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1a1a1a] hover:bg-[#FF6C0C] text-white transition">
                                <FaEnvelope />
                            </a>
                        </div>
                        <p className="text-sm">
                            Available for freelance & full-time opportunities.
                        </p>
                    </div>
                </div>
                <div className="border-t border-[#1a1a1a] pt-6 flex flex-col md:flex-row justify-center gap-8 items-center text-sm">
                    <p>© {new Date().getFullYear()} Ahmed Maher. All rights reserved</p>
                    <a target="_blank" href="https://mahmoudfathydev-hub.github.io/New-Portfolio/">
                        <p className="mt-3 md:mt-0">
                            Built with <span className="text-[#FF6C0C]">Eng:Mahmoud Fathy</span>
                        </p>
                    </a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
