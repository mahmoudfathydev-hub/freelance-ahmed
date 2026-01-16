"use client";
import FloatingBubble from "@/components/FloatingBubble";
import { useState } from "react";
import { FaWordpress, FaTools, FaRocket, FaSearch, FaEdit, FaBlog, FaHtml5, FaCss3Alt, FaGlobe } from "react-icons/fa";
import { MdDevices, MdEdit } from "react-icons/md";
import { SiSquarespace, SiTrello } from "react-icons/si";
const SkillsTabs = () => {
    const tabs = [
        {
            id: 1, name: "Platforms", skills: [
                { id: 1, name: "Duda", icon: <FaGlobe size={28} /> },
                { id: 2, name: "WordPress", icon: <FaWordpress size={28} /> },
                { id: 3, name: "Squarespace", icon: <SiSquarespace size={28} /> },
            ]
        },
        {
            id: 2, name: "Website Skills", skills: [
                { id: 4, name: "Responsive Design", icon: <MdDevices size={28} /> },
                { id: 5, name: "Website Maintenance", icon: <FaTools size={28} /> },
                { id: 6, name: "Performance Optimization", icon: <FaRocket size={28} /> },
            ]
        },
        {
            id: 3, name: "SEO", skills: [
                { id: 7, name: "On-page SEO", icon: <FaSearch size={28} /> },
                { id: 8, name: "Content Optimization", icon: <FaEdit size={28} /> },
            ]
        },
        {
            id: 4, name: "Content", skills: [
                { id: 9, name: "Blog Creation & Content Management", icon: <FaBlog size={28} /> },
            ]
        },
        {
            id: 5, name: "Basics", skills: [
                { id: 10, name: "HTML", icon: <FaHtml5 size={28} /> },
                { id: 11, name: "CSS (Basic)", icon: <FaCss3Alt size={28} /> },
            ]
        },
        {
            id: 6, name: "Tools", skills: [
                { id: 12, name: "Trello", icon: <SiTrello size={28} /> },
                { id: 13, name: "CMS Editors", icon: <MdEdit size={28} /> },
            ]
        },
    ];
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div className="skills ">
            <style>{`
                @keyframes floatSkill {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }
                .skill-card {
                    animation: floatSkill 3s ease-in-out infinite;
                }
                .skill-card:nth-child(2) {
                    animation-delay: 0.2s;
                }
                .skill-card:nth-child(3) {
                    animation-delay: 0.4s;
                }
                .skill-card:nth-child(4) {
                    animation-delay: 0.6s;
                }
            `}</style>
            <FloatingBubble />
            <div className="border-t-2 max-w-310 m-auto text-white py-16 flex flex-col items-center">
                <h2 data-aos="fade-down" className="text-4xl md:text-5xl font-bold mb-10 text-center text-white">MY <span className="text-[#FF6C0C]">SKILLS</span> </h2>
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {tabs.map(tab => (
                        <button data-aos="fade-right" key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-6 py-3 cursor-pointer rounded-full font-semibold transition-all duration-300 ${activeTab === tab.id ? "bg-[#FF6C0C] text-white shadow-lg" : "bg-gray-800 text-gray-300 hover:bg-[#FF6C0C] hover:text-white"}`}>
                            {tab.name}
                        </button>
                    ))}
                </div>
                <div className="flex justify-center items-center w-full min-h-50">
                    <div className="flex flex-wrap justify-center items-center gap-6">
                        {tabs.find(tab => tab.id === activeTab)?.skills.map(skill => (
                            <div
                                data-aos="fade-left"
                                key={skill.id}
                                className="skill-card flex flex-col items-center justify-center bg-gray-800 hover:bg-[#FF6C0C] hover:text-white text-gray-200 rounded-2xl p-6 w-44 duration-300 ease transition-transform transform cursor-pointer text-center shadow-md"
                            >
                                <div className="icon mb-4 text-3xl">{skill.icon}</div>
                                <div className="text-base font-medium">{skill.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SkillsTabs;
