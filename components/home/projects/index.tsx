



import { useState } from 'react';
import Button from '@/components/common/button'
import Link from 'next/link';

const sections = [
    {
        title: 'Clinics',
        image: 'https://res.cloudinary.com/dbldpiazm/image/upload/v1756798297/clinic2_ehfnkt.jpg',
        href: '/projects/clinics',
    },
    {
        title: 'Hospitals',
        image: 'https://res.cloudinary.com/dbldpiazm/image/upload/v1756798303/hospital_qfq3gd.jpg',
        href: '/projects/hospitals',
    },
    {
        title: 'Chambers',
        image: 'https://res.cloudinary.com/dbldpiazm/image/upload/v1761733396/Chambers01_fow0xr.jpg',
        href: '/projects/chambers',
    },
    {
        title: 'Home Interiors',
        image: 'https://res.cloudinary.com/dbldpiazm/image/upload/v1756798297/home3_jqa703.jpg',
        href: '/projects/home-interiors',
    },
];

function Projects() {
    const [active, setActive] = useState<number | null>(0); // Set default image to first one

    return (
        <section className=" bg-white text-black pt-16">
            <div className="container mx-auto px-4 md:px-8 pb-16">
                <div className="grid md:grid-cols-2">
                    <div>
                        <p className="text-sm tracking-widest text-primary-accent uppercase">
                            Our Projects
                        </p>
                        <h2 className="text-3xl font-bold mt-5">
                            Check Our
                            <span className="text-black bg-transparent bg-[linear-gradient(270deg,transparent_54%,#EBD1AE_53%)] ms-2">
                                Latest
                            </span> Projects
                        </h2>
                        <p className="mt-5 text-gray-500 max-w-xl">
                            Peek into our latest design journeys! {"We’ve"} been busy turning blank spaces into wow-worthy corners  and {"here’s"} the proof.
                        </p>
                    </div>
                    <div className='md:flex items-center justify-end'>
                        <Button label="All Projects"
                            href="/projects"
                            className="bg-primary-accent hover:bg-black text-white"
                        />
                    </div>
                </div>
            </div>
            <div className="relative w-full lg:h-screen md:h-[600px] h-[300px] overflow-hidden bg-white">
                <div className="absolute inset-0 transition-all duration-500 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${sections[active !== null ? active : 0].image})`,
                    }}
                />

                <div className="relative z-10 flex h-full w-full divide-x divide-white/20">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setActive(index)}
                            onMouseLeave={() => setActive(0)}
                            className="group relative w-1/4 flex items-end justify-center text-center cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-black/20 transition duration-300" />

                            <div className="absolute md:top-7 top-1 p-4 z-10">
                                <span className="uppercase text-xs text-white tracking-widest group-hover:text-primary-accent transition-all">Interior</span>
                                <h2 className="md:text-xl text-sm font-semibold text-white group-hover:text-primary-accent transition-all">{section.title}</h2>
                            </div>

                            <div
                                className="absolute top-0 left-0 right-0 bg-white text-black p-4 transform -translate-y-36 group-hover:translate-y-0 transition-all duration-500 ease-in-out md:h-32 h-24"
                            />
                            <Link href={section.href}>
                                <div className="absolute inset-0 bg-black/20 transition duration-300" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;