
import Image from "next/image";
import React from "react";
import { HiOutlineCheck } from "react-icons/hi";
import ConsultationCTA from "@/components/common/consultationCTA";
import DynamicBanner from "@/components/common/banner";
import ProjectNavigator from "@/components/common/cards/ProjectNavigator";

const features = [
    {
      title: "Open & Airy Layouts",
      description:
        "Maximizing natural light and circulation to create calm, welcoming spaces for patients and staff.",
    },
    {
      title: "Custom Furniture & Functional Zones",
      description:
        "Ergonomic, patient-friendly furniture and optimized layouts tailored to medical workflows and comfort.",
    },
    {
      title: "Soothing Color Palettes",
      description:
        "Calming tones that reduce stress and promote well-being, while maintaining a professional, modern aesthetic.",
    },
    {
      title: "Intelligent Lighting Design",
      description:
        "Ambient, task, and accent lighting for every area from patient rooms to consultation zones, ensuring comfort and efficiency.",
    },
    {
      title: "Decor & Material Selection",
      description:
        "Carefully chosen textures, finishes, and elements that enhance hygiene, safety, and aesthetic appeal without compromising functionality.",
    },
  ];
  
const Hospitals = () => {
    return (
        <>
            <DynamicBanner
                imageUrl="https://res.cloudinary.com/dbldpiazm/image/upload/v1756798530/hospital1_urosda.jpg"
                altText="About Banner"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Projects", href: "/projects" },
                    { label: "Hospitals", href: "/projects/hospitals" }
                ]} title="Hospitals"
            />
            <section className="bg-primary-floral text-gray-500 border-b">
                <div className="container mx-auto px-4 lg:px-16 py-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="lg:col-span-2 overflow-hidden">
                            <Image
                                src="https://res.cloudinary.com/dbldpiazm/image/upload/v1756798303/hospital_qfq3gd.jpg"
                                alt="logo"
                                width={1000}
                                height={1000}
                                className=""
                            />

                            <div className="md:mt-10 mt-5">
                                <div className="max-w-4xl mx-auto">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                        Hospital Design
                                    </h2>

                                    <p className="text-lg mb-6">
                                    At strong <strong>KIAIKI</strong>KIAIKI, we believe that hospitals and clinics are more than functional spaces - they are places of healing, comfort, and reassurance. Our designs combine modern elegance, functionality, and warmth, creating interiors that make patients, visitors, and staff feel cared for from the moment they step in.</p>

                                    <h3 className="text-xl font-semibold text-primary-accent mb-4">What We Focus On:</h3>
                                    <ul className="space-y-4 mb-8">
                                        {features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <HiOutlineCheck size={22} className="text-primary-accent mt-1" />
                                                <div className="ml-2">
                                                    <strong>{feature.title}:</strong> {feature.description}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    <blockquote className="text-primary-accent italic border-l-4 border-primary-accent  pl-4 text-lg">
                                        “Because healthcare spaces should do more than serve a function - they should inspire confidence and healing.”
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="md:pr-10">
                            <div className="sticky top-10 px-5">
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

export default Hospitals;
