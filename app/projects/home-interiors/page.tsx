
import Image from "next/image";
import React from "react";
import { HiOutlineCheck } from "react-icons/hi";
import ConsultationCTA from "@/components/common/consultationCTA";
import DynamicBanner from "@/components/common/banner";
import ProjectNavigator from "@/components/common/cards/ProjectNavigator";

const features = [
    {
        title: "Open & Inviting Layouts",
        description:
            "Maximizing light and space to make every room feel expansive, bright, and welcoming.",
    },
    {
        title: "Bespoke Furniture & Planning",
        description:
            "Custom arrangements that reflect your lifestyle while ensuring seamless functionality.",
    },
    {
        title: "Sophisticated Color Story",
        description:
            "Curated palettes that calm, inspire, and elevate every corner of your home.",
    },
    {
        title: "Smart & Mood-Crafted Lighting",
        description:
            "Layered lighting that sets the perfect ambience for every moment.",
    },
    {
        title: "Textures & Decor with Impact",
        description:
            "From rugs to artwork, every element is carefully selected to create harmony and luxury.",
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
                    { label: "Home Interiors", href: "/projects/home-interiors" }
                ]} title="Home Interiors"
            />
            <section className="bg-primary-floral text-gray-500 border-b">
                <div className="container mx-auto px-4 md:px-8 py-12">
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
                                        Where Luxury Meets Living
                                    </h2>

                                    <p className="text-lg mb-6">
                                        At <strong>KIAIKI</strong>, we don&apos;t just design homes — we craft experiences that define your lifestyle. Every space is transformed into a blend of elegance, comfort, and personality, creating interiors that leave a lasting impression.</p>
                                    
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
                                        “A home should do more than look beautiful - it should feel extraordinary.”
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
