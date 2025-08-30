import { FC } from "react";
import { FaClinicMedical, FaHospital, FaUserMd, FaHome } from "react-icons/fa";
import Link from "next/link";

interface ProjectType {
  title: string;
  icon: React.ReactNode;
  href: string;
  description: string;
}

const projectTypes: ProjectType[] = [
  {
    title: "Clinics",
    icon: <FaClinicMedical size={28} />,
    href: "/projects/clinics",
    description: "Modern, patient-centered clinic designs.",
  },
  {
    title: "Hospitals",
    icon: <FaHospital size={28} />,
    href: "/projects/hospitals",
    description: "Efficient and advanced medical facilities.",
  },
  {
    title: "Chambers",
    icon: <FaUserMd size={28} />,
    href: "/projects/chambers",
    description: "Private practice spaces tailored for specialists.",
  },
  {
    title: "Home Interiors",
    icon: <FaHome size={28} />,
    href: "/projects/home-interiors",
    description: "Stylish, functional interiors for modern living.",
  },
];

const ProjectNavigator: FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full border border-gray-200  p-5">
      <h2 className="text-2xl font-bold px-5">
        Explore Our Projects
      </h2>
      {projectTypes.map((type, idx) => (
        <Link
          key={idx}
          href={type.href}
          className="group flex items-start gap-4 bg-white px-5 py-3 hover:bg-primary-accent transition-all duration-300"
        >
          <div className="bg-primary-accent text-white p-4 group-hover:bg-white group-hover:text-primary-accent transition">
            {type.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white">
              {type.title}
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-200">
              {type.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectNavigator;
