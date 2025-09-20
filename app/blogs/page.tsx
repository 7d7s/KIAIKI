import DynamicBanner from '@/components/common/banner'
import React from 'react'
import Image from "next/image";
import Button from "@/components/common/button";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import { MdArrowOutward } from 'react-icons/md';

type Blog = {
  image: string;
  category: string;
  title: string;
  date: string;
  description: string;
};

const blogs: Blog[] = [
  {
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744693738/ConsultationSection_e8salw.avif",
    category: "Insight",
    title: "8 Best Affordable Bathroom Remodel Ideas For Style On A Budget",
    description: "Discover creative and cost-effective ways to remodel your bathroom without breaking the bank. Transform your space with simple yet stylish ideas.",
    date: "June 01, 2022",
  },
  {
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744884187/Living_Room_j0keey.png",
    category: "Furniture",
    title: "12 Best Outdoor Furniture Ideas For Cozy Backyard Living",
    description: "Upgrade your backyard with these comfortable and stylish outdoor furniture ideas. Perfect for creating a relaxing and inviting outdoor space.",
    date: "June 11, 2022",
  },
  {
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744883436/Interior3_iyclnw.avif",
    category: "Interior",
    title: "Top 13 Luxury Home Décor Ideas For A High-End Interior",
    description: "Explore luxury home décor tips to give your interior a sophisticated and high-end look. Elevate your living space with elegant design choices.",
    date: "Augest 05, 2022",
  },
  {
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1745412078/Interior_Design_Ideas_usapmy.avif",
    category: "Interior",
    title: "Commercial Interior Design Ideas for a Productive Business",
    description: "Smart commercial interior design boosts focus, collaboration, and productivity — turning your workspace into a success zone.",
    date: "Augest 11, 2022",
  },
];

const Blog: React.FC = () => {
  return (
    <>
      <DynamicBanner
        imageUrl="https://res.cloudinary.com/ddgbehuxg/image/upload/v1745220686/blogbanner_vcovuz.avif"
        altText="About Banner"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blogs" }
        ]} title="Our Blogs"
      />


      <section className="px-4 md:px-8 lg:px-16 py-10 md:py-20 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Blog List */}
          <div className="lg:col-span-2 grid gap-10">
            {blogs.map((blog, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-6">
                <div className="w-full md:h-72 relative">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={1000}
                    height={1000}
                    className="rounded-md w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col text-black">
                  <p className="text-xs font-semibold uppercase text-primary-accent tracking-wide">
                    {blog.category}
                  </p>
                  <h3 className="text-lg font-semibold leading-snug mt-1">
                    {blog.title}
                  </h3>
                  <p className="text-base mt-2 text-gray-500">
                    {blog.description}
                  </p>
                  <Link href="#" className="mt-auto text-sm text-primary-accent font-medium inline-flex items-center">
                    Read More <MdArrowOutward size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-10 relative text-black">
            <div className="sticky top-10">
              <div className="p-5 rounded-md my-5">
                <h4 className="text-xl font-semibold mb-4">Recent Post</h4>
                <ul className="space-y-4 text-gray-700">
                  {blogs.map((blog, i) => (
                    <li key={i} className="">
                      <div className="flex items-center"> <IoTimeOutline /> &nbsp;
                        <p className="text-sm text-gray-500">{blog.date}</p></div>
                      <Link href="" className="hover:text-primary-accent font-medium block">
                        {blog.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary-floral p-5 rounded-md my-5">
                <h5 className="font-semibold text-lg mb-2">Get Consultation Now</h5>
                <p className="text-sm text-gray-700 mb-4">
                  Our experienced team is here to guide you every step of the way. Schedule your free consultation today and{" let's"} bring your vision to life  smartly, smoothly, and successfully.
                </p>
                <Button
                  href="/contact"
                  label="Contact Us"
                  className="bg-primary-accent text-sm hover:bg-black hover:text-white mb-3 text-white"
                />
              </div>

              <div className="p-5">
                <h4 className="text-xl font-semibold mb-4">Our Projects</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center justify-start"><IoIosArrowForward /> &nbsp; <a href="/projects/clinics" className="hover:text-primary-accent">Clinics</a></li>
                  <li className="flex items-center justify-start"><IoIosArrowForward /> &nbsp; <a href="/projects/hospitals" className="hover:text-primary-accent">Hospitals</a></li>
                  <li className="flex items-center justify-start"><IoIosArrowForward /> &nbsp; <a href="/projects/chambers" className="hover:text-primary-accent">Chambers</a></li>
                  <li className="flex items-center justify-start"><IoIosArrowForward /> &nbsp; <a href="/projects/home-interiors" className="hover:text-primary-accent">Home Interiors</a></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

    </>
  )
}

export default Blog
