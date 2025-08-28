import { FaCouch, FaPalette, FaLightbulb } from "react-icons/fa";
import ProjectInfo from "@/components/common/cards/projectCard";
import Image from "next/image";
import React from "react";
import { HiOutlineCheck } from "react-icons/hi";
import ConsultationCTA from "@/components/common/consultationCTA";
import DynamicBanner from "@/components/common/banner";
const solutions = [
    {
        icon: <FaCouch className="text-4xl mb-4" />,
        title: "Space Planning",
        description: "Smart layouts and optimal furniture placement for maximum comfort and flow.",
    },
    {
        icon: <FaPalette className="text-4xl mb-4" />,
        title: "Color Consulting",
        description: "Expert guidance in selecting the perfect hues to reflect your style and mood.",
    },
    {
        icon: <FaLightbulb className="text-4xl mb-4" />,
        title: "Lighting Design",
        description: "Layered lighting plans to enhance ambience and bring spaces to life.",
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
                                        Living Room Design
                                    </h2>

                                    <p className="text-lg mb-6">
                                        <strong>Transform your space into a luxurious comfort zone.</strong><br />
                                        At Kaikai, we believe the living room is the soul of your home — where style meets comfort,
                                        and conversations flow effortlessly. Our living room designs blend
                                        <span className="font-semibold"> elegance </span>, <span className="font-semibold">functionality</span>, and
                                        <span className="font-semibold"> warmth</span> to create a space that truly feels like
                                        <em>you.</em>
                                    </p>

                                    <h3 className="text-xl font-semibold text-primary-accent mb-4">What We Focus On:</h3>
                                    <ul className="space-y-2 mb-8">
                                        <li className="flex items-center"><HiOutlineCheck size={22} className="text-primary-accent" /> &nbsp; <strong>Open & Airy Layouts:</strong> Making your room feel bigger and brighter</li>
                                        <li className="flex items-center"><HiOutlineCheck size={22} className="text-primary-accent" /> &nbsp; <strong>Custom Furniture Arrangement:</strong> Tailored to your lifestyle and space</li>
                                        <li className="flex items-center"><HiOutlineCheck size={22} className="text-primary-accent" /> &nbsp; <strong>Perfect Color Palette:</strong> Soothing tones that inspire calm and connection</li>
                                        <li className="flex items-center"><HiOutlineCheck size={22} className="text-primary-accent" /> &nbsp; <strong>Smart Lighting:</strong> Ambient, task, and accent lighting for every mood</li>
                                        <li className="flex items-center"><HiOutlineCheck size={22} className="text-primary-accent" /> &nbsp; <strong>Decor & Texture Play:</strong> Wall art, rugs, and plants for a magazine-worthy finish</li>
                                    </ul>

                                    <blockquote className="text-primary-accent italic border-l-4 border-primary-accent  pl-4 text-lg">
                                        “Because your living room deserves to be more than just a room — it should be an experience.”
                                    </blockquote>

                                    <div className="grid md:grid-cols-2 gap-8 md:my-10 mt-5">
                                        <Image src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744614056/about11_utg1pm.avif"
                                            alt="logo" width={1000} height={1000} className="object-cover"
                                        />
                                        <Image src="https://res.cloudinary.com/ddgbehuxg/image/upload/v1744883436/Interior3_iyclnw.avif"
                                            alt="logo" width={1000} height={1000} className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-2xl font-bold mb-4 text-black">Our Solutions</h2>
                                        <p className="text-lg mb-10">
                                            We offer innovative and tailored interior design solutions that bring your dream spaces to life.
                                            From concept to execution, our team ensures functionality meets elegance in every detail.
                                        </p>

                                        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                                            {solutions.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="border-primary-accent border p-6 hover:shadow-lg transition duration-300"
                                                >
                                                    <div className="text-primary-accent">{item.icon}</div>
                                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                                                    <p className="">{item.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:pr-10">
                            <div className="sticky top-10 px-5">
                                <ProjectInfo
                                    client="Amit Kumar"
                                    date="March 18, 2024"
                                    category="Living Room"
                                    location="Delhi, Kirti Nagar"
                                />

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
