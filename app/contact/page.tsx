"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaClock,
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaCheckCircle,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AOS.init({ once: true, duration: 1000 });
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        // Simulate form submission
        setTimeout(() => {
            setSubmitted(true);
            setLoading(false);
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitted(false), 5000);
        }, 1000);
    };

    const contactInfo = [
        {
            icon: FaEnvelope,
            title: "Email",
            details: "ahmedmaher88103@gmail.com",
            link: "mailto:ahmedmaher88103@gmail.com",
        },
        {
            icon: FaPhone,
            title: "Phone",
            details: "+20 106 605 0658",
            link: "tel:+201066050658",
        },
        {
            icon: FaMapMarkerAlt,
            title: "Location",
            details: "Giza, Egypt",
        },
        {
            icon: FaClock,
            title: "Availability",
            details: "Mon - Fri, 9:00 AM - 6:00 PM",
        },
    ];

    const socialLinks = [
        { icon: FaLinkedin, link: "https://linkedin.com", label: "LinkedIn" },
        { icon: FaGithub, link: "https://github.com", label: "GitHub" },
        { icon: FaTwitter, link: "https://twitter.com", label: "Twitter" },
    ];

    return (
        <main className="min-h-screen pt-24 bg-[#0F1419]">
            {/* Header Section */}
            <section className="container max-w-6xl mx-auto px-6 py-12">
                <div data-aos="fade-down" className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Have a project in mind? Let&apos;s collaborate and create something amazing
                        together. Feel free to reach out through any of these channels.
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactInfo.map((info, index) => {
                        const Icon = info.icon;
                        return (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="group bg-[#1a1f26] p-6 rounded-lg border border-gray-700 hover:border-[#FF6C0C] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6C0C]/20 text-center"
                            >
                                <div className="inline-flex p-3 bg-[#FF6C0C]/10 rounded-full mb-4 group-hover:bg-[#FF6C0C]/20 transition-colors">
                                    <Icon className="text-[#FF6C0C] text-2xl" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                                {info.link ? (
                                    <a
                                        href={info.link}
                                        className="text-gray-400 hover:text-[#FF6C0C] transition-colors"
                                    >
                                        {info.details}
                                    </a>
                                ) : (
                                    <p className="text-gray-400">{info.details}</p>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Main Contact Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Contact Form */}
                    <div
                        data-aos="fade-right"
                        className="lg:col-span-2 bg-[#1a1f26] p-8 rounded-lg border border-gray-700"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>

                        {submitted && (
                            <div
                                data-aos="fade-down"
                                className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded-lg flex items-center gap-3"
                            >
                                <FaCheckCircle className="text-green-500 text-xl" />
                                <div>
                                    <p className="font-semibold text-green-400">Success!</p>
                                    <p className="text-green-300 text-sm">
                                        Thanks for reaching out. I&apos;ll get back to you soon!
                                    </p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#0F1419] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6C0C] transition-colors"
                                    placeholder="Your name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#0F1419] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6C0C] transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#0F1419] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6C0C] transition-colors"
                                    placeholder="Project inquiry"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-[#0F1419] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6C0C] transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full px-6 py-3 bg-gradient-to-r from-[#FF6C0C] to-[#e55b00] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#FF6C0C]/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>

                    {/* Sidebar */}
                    <div data-aos="fade-left" className="space-y-6">
                        {/* Quick Response */}
                        <div className="bg-gradient-to-br from-[#FF6C0C]/20 to-[#FF6C0C]/5 p-6 rounded-lg border border-[#FF6C0C]/30">
                            <h3 className="text-lg font-bold text-white mb-3">Quick Response</h3>
                            <p className="text-gray-300 text-sm mb-4">
                                I typically respond to inquiries within 24 hours during business days.
                            </p>
                            <div className="flex items-center gap-2 text-[#FF6C0C]">
                                <div className="w-2 h-2 bg-[#FF6C0C] rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium">Usually available</span>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="bg-[#1a1f26] p-6 rounded-lg border border-gray-700">
                            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
                            <ul className="space-y-3">
                                {[
                                    "Web Development",
                                    "UI/UX Design",
                                    "Project Consultation",
                                    "Portfolio Review",
                                ].map((service, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-2 h-2 bg-[#FF6C0C] rounded-full"></div>
                                        <span>{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div className="bg-[#1a1f26] p-6 rounded-lg border border-gray-700">
                            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="flex items-center justify-center w-10 h-10 bg-[#FF6C0C]/10 text-[#FF6C0C] rounded-full hover:bg-[#FF6C0C] hover:text-white transition-all duration-300"
                                        >
                                            <Icon />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <section data-aos="fade-up" className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                question: "What's your typical response time?",
                                answer:
                                    "I aim to respond to all inquiries within 24 hours during business days.",
                            },
                            {
                                question: "Do you work remotely?",
                                answer:
                                    "Yes, I work with clients worldwide and have extensive experience in remote collaboration.",
                            },
                            {
                                question: "What's your project timeline?",
                                answer:
                                    "Projects vary in scope. We can discuss timelines during our initial consultation.",
                            },
                            {
                                question: "Do you offer ongoing support?",
                                answer:
                                    "Absolutely! I provide post-launch support and maintenance services for all projects.",
                            },
                        ].map((faq, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="bg-[#1a1f26] p-6 rounded-lg border border-gray-700 hover:border-[#FF6C0C] transition-colors"
                            >
                                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                                <p className="text-gray-400">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </section>

            {/* Bottom CTA */}
            <section className="bg-gradient-to-r from-[#FF6C0C] to-[#e55b00] text-white py-16">
                <div className="container max-w-6xl mx-auto px-6 text-center" data-aos="fade-up">
                    <h2 className="text-3xl font-bold mb-4">Ready to start your next project?</h2>
                    <p className="text-lg mb-8 opacity-90">
                        Let&apos;s bring your ideas to life with cutting-edge solutions and creative design.
                    </p>
                    <button
                        onClick={() => document.querySelector("input[name='name']")}
                        className="px-8 py-3 bg-white text-[#FF6C0C] font-semibold rounded-md hover:bg-gray-100 transition"
                    >
                        Get Started
                    </button>
                </div>
            </section>
        </main>
    );
}
