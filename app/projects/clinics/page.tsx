
import Image from "next/image";
import React from "react";
import { HiOutlineCheck } from "react-icons/hi";
import ConsultationCTA from "@/components/common/consultationCTA";
import DynamicBanner from "@/components/common/banner";
import ProjectNavigator from "@/components/common/cards/ProjectNavigator";

const features = [
    {
        title: "Patient-Centered Care",
        description:
            "Every treatment plan is tailored to your unique needs, ensuring holistic care and complete attention.",
    },
    {
        title: "Advanced Medical Technology",
        description:
            "Cutting-edge equipment and innovative techniques for accurate diagnosis and effective treatment.",
    },
    {
        title: "Comfort & Wellness Environment",
        description:
            "Spaces designed for calm, privacy, and healing - because your comfort matters.",
    },
    {
        title: "Expert Team of Specialists",
        description:
            "Highly qualified, experienced professionals dedicated to your health and well-being.",
    },
    {
        title: "Seamless Experience",
        description:
            "From appointment scheduling to follow-ups, every step is designed to be simple, transparent, and efficient.",
    },
];
const Clinics = () => {
    return (
        <>
            <DynamicBanner
                imageUrl="https://res.cloudinary.com/dbldpiazm/image/upload/v1756798297/clinic2_ehfnkt.jpg"
                altText="About Banner"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Projects", href: "/projects" },
                    { label: "Clinics", href: "/projects/clinics" }
                ]} title="Clinics"
            />
            <section className="bg-primary-floral text-gray-500 border-b">
                <div className="container mx-auto px-4 md:px-8 py-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
                        <div className="lg:col-span-2 overflow-hidden">
                            <Image
                                src="https://res.cloudinary.com/dbldpiazm/image/upload/v1756798296/clinic1_moxcfu.jpg"
                                alt="logo"
                                width={1000}
                                height={1000}
                                className=""
                            />

                            <div className="md:mt-10 mt-5">
                                <div className="max-w-4xl mx-auto">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                        Clinic Design
                                    </h2>

                                    <p className="text-lg mb-6">
                                        At <strong> KIAIKI Clinics </strong>, we believe healthcare should be personal, precise, and premium. Every consultation, treatment, and service is designed to provide patients with comfort, confidence, and world-class care. Our clinics combine state-of-the-art technology, expert medical professionals, and a soothing environment to make every visit a seamless experience.

                                    </p>

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
                                        “At KIAIKI Clinics, we don&apos;t just treat conditions — we care for people.”
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="sticky top-10">
                            <ProjectNavigator />
                        </div>
                    </div>
                </div>
            </section>

            <ConsultationCTA />
        </>
    );
}

export default Clinics;
