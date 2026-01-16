"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "About", link: "/about" },
        { id: 3, name: "Projects", link: "/projects" },
        { id: 4, name: "Contact", link: "/contact" },
    ];
    useEffect(() => { AOS.init({ once: true, duration: 1000 }); }, []);
    useEffect(() => { AOS.refresh(); }, [isOpen]);
    return (
        <nav className="w-full bg-[#181A1B] text-white fixed top-0 left-0 z-50 shadow-md">
            <div className="container max-w-6xl mx-auto flex items-center justify-between px-6 h-20">
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" className="flex items-center gap-3">
                    <div className="logo">
                        <Link href="/">
                            <Image src="/logo-3.png" alt="logo" width={150} height={150} className="hover:scale-110 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
                <ul className="hidden md:flex gap-8">
                    {links.map((link, index) => {
                        const isActive = pathname === link.link;
                        return (
                            <Link href={link.link} key={link.id}>
                                <li data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1000 + index * 300} className={`tracking-wider text-lg cursor-pointer transition-all duration-800 ${isActive ? "text-[#FF6C0C]" : "text-white hover:text-[#FF6C0C]"}`}>{link.name}</li>
                            </Link>
                        );
                    })}
                </ul>
                <div className="hidden md:block">
                    <Link href="/contact">
                        <button data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1800" className="px-6 py-2 rounded-md bg-[#FF6C0C] text-white font-semibold hover:bg-[#e55b00] transition">Let&apos;s talk</button>
                    </Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            <div className={`md:hidden fixed inset-0 bg-[#181A1B] z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <ul className="flex flex-col gap-8 text-center">
                    {links.map((link, index) => {
                        const isActive = pathname === link.link;
                        return (
                            <li key={link.id}>
                                <Link href={link.link} onClick={() => setIsOpen(false)} data-aos="fade-down" data-aos-easing="linear" data-aos-duration={1200 + index * 300} className={`text-2xl font-medium transition-colors ${isActive ? "text-[#FF6C0C]" : "text-white hover:text-[#FF6C0C]"}`}>{link.name}</Link>
                            </li>
                        );
                    })}
                    <li>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            <button data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000" className="px-10 py-3 rounded-md bg-[#FF6C0C] text-white font-semibold hover:bg-[#e55b00] transition">Let&apos;s talk</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
