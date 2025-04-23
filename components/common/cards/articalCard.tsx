import Image from 'next/image';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

interface ArticleCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ image, category, title, description, link }) => {
  return (
    <div className="blog-card bg-white overflow-hidden transition-all duration-300">
        <div className='blog-img  relative'>
      <Image src={image} alt={title} width={1000} height={1000} className="w-full h-72 object-cover" />
      </div>
      <div className=" py-5">
        <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">{category}</p>
        <h3 className="mt-2 text-lg font-bold text-gray-900 leading-snug">{title}</h3>
        <p className="mt-2 text-md text-gray-600">{description}</p>
        <a
          href={link}
          className="mt-4 inline-flex items-center text-sm font-medium text-emerald-700 hover:underline"
        >
          Read More &nbsp;
          <MdArrowOutward size={16} />
        </a>
      </div>
    </div> 
  );
};

export default ArticleCard;
