import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

interface ButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  href = "#",
  label = "About Interse",
  className = "bg-primary-accent hover:bg-black hover:text-white",
}) => {
  return (
    <div className="group relative w-auto md:text-end flex md:mt-0 mt-5">
      <Link
        href={href}
        className={`relative md:text-md text-sm uppercase tracking-widest md:min-w-48 w-auto text-nowrap md:py-4 py-3 px-4 overflow-hidden transition-all duration-500 ease-in-out flex items-center justify-center ${className}`}
      >
        {label} &nbsp; <MdArrowOutward size={20} />
      </Link>
    </div>
  );
};

export default Button;
