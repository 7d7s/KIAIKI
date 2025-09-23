
import Image from "next/image";
import React from "react";
import { HiOutlineCheck } from "react-icons/hi";
import ConsultationCTA from "@/components/common/consultationCTA";
import DynamicBanner from "@/components/common/banner";
import ProjectNavigator from "@/components/common/cards/ProjectNavigator";

const features = [
    {
        title: "Strategic Space Planning",
        description:
            "Optimized layouts that support client meetings, research, and administrative workflows while maintaining openness and professionalism.",
    },
    {
        title: "Executive Furniture Solutions",
        description:
            "Custom desks, seating, and storage designed for ergonomics, efficiency, and visual authority.",
    },
    {
        title: "Sophisticated Color Palettes",
        description:
            "Muted and balanced tones that convey stability, trust, and focus.",
    },
    {
        title: "Advanced Lighting Design",
        description:
            "Layered lighting systems for task, ambient, and accent needs, ensuring clarity and a professional ambience.",
    },
    {
        title: "Premium Materials & Finishes",
        description:
            "High-quality surfaces, textures, and subtle décor that enhance prestige and durability.",
    },
];


const Chambers = () => {
    return (
        <>
            <DynamicBanner
                imageUrl="https://res.cloudinary.com/ddgbehuxg/image/upload/v1745220874/dea_znhkav.avif"
                altText="About Banner"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Projects", href: "/projects" },
                    { label: "Chambers", href: "/projects/chambers" }
                ]} title="Chambers"
            />
            <section className="bg-primary-floral text-gray-500 border-b">
                <div className="container mx-auto px-4 lg:px-16 py-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="lg:col-span-2 overflow-hidden">
                            <Image
                                src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744884104/Living_Room_nivbla.avif"
                                alt="logo"
                                width={1000}
                                height={1000}
                                className=""
                            />

                            <div className="md:mt-10 mt-5">
                                <div className="max-w-4xl mx-auto">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                        Professional Legal Spaces Design
                                    </h2>

                                    <p className="text-lg mb-6">
                                        At <strong>KIAIKI</strong>, we design chambers that reflect professionalism, credibility, and refined taste. Every element is carefully curated to create functional, elegant, and prestigious environments where lawyers can work efficiently, host clients confidently, and maintain a lasting impression of excellence.</p>

                                    <h3 className="text-xl font-semibold text-primary-accent mb-4">What We Focus On:</h3>
                                    <ul className="space-y-4 mb-8">
                                        {features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <HiOutlineCheck size={22} className="text-primary-accent mt-1 shrink-0" />
                                                <div className="ml-2">
                                                    <strong>{feature.title}:</strong> {feature.description}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    <blockquote className="text-primary-accent italic border-l-4 border-primary-accent  pl-4 text-lg">
                                        “A lawyer&apos;s chambers should inspire confidence, convey authority, and support focused performance.”
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="md:pr-10">
                            <div className="sticky top-10 px-0 md:px-5">
                                <ProjectNavigator />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ConsultationCTA />
        </>
    );
}

export default Chambers;
