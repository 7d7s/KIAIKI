import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";
import DynamicBanner from '@/components/common/banner'
import Button from "@/components/common/button";

function page() {
  return (
    <>
      <DynamicBanner
        imageUrl="https://res.cloudinary.com/ddgbehuxg/image/upload/v1745220686/banner_uf972x.avif"
        altText="About Banner"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" }
        ]} title="Contact Us"
      />
      <section className=" bg-white text-black">
        <div className="container mx-auto px-4 lg:px-16 md:py-20 py-5 text-center">
          <div className="mb-10">
            <p className="text-sm uppercase text-primary-accent tracking-wide">Contact Us</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 my-4">Get In Touch With Interse</h2>
            <p className=" mt-2 text-gray-500 max-w-xl mx-auto">
              Have questions, ideas, or a project in mind? We’re here to help you bring your vision to life. Reach out to our team and {"let’s"} create something exceptional together.
            </p>
          </div>

          <div className="bg-primary-floral p-6 sm:p-10 rounded-md mt-8">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 p-3 rounded-sm focus:outline-none "
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 p-3 rounded-sm focus:outline-none "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 p-3 rounded-sm focus:outline-none "
              />

              <input
                type="text"
                placeholder="Your Subject"
                className="border border-gray-300 p-3 rounded-sm outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="border border-gray-300 p-3 rounded-sm sm:col-span-2 outline-none resize-none"
              ></textarea>

              <div className="sm:col-span-2 text-center mx-auto">
                <Button
                  href="#"
                  label="Send Messages"
                  className="bg-primary-accent text-sm hover:bg-black hover:text-white mb-3 text-white"
                />
              </div>
            </form>
          </div>

          <div className="w-full h-[400px] mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28011.80940513879!2d77.12064333312232!3d28.64545765523457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0304934fb67d%3A0x232534e44837b1bf!2sKirti%20Nagar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1745056433107!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-4 md:px-16 bg-gray-50 text-gray-800">
            <div className="flex items-start justify-start gap-4">
              <div className="bg-primary-accent text-white p-4">
                <FaPhoneAlt />
              </div>
              <div className="text-start">
                <h4 className="font-semibold text-lg">Phone Number</h4>
                <p className="text-sm">+91 9220708032</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-accent text-white p-4">
                <FaMapMarkerAlt />
              </div>
              <div className="text-start">
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-sm">I-102, Second Floor, Block I, Kirti Nagar, Delhi, 110015</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-accent text-white p-4">
                <FaClock />
              </div>
              <div className="text-start">
                <h4 className="font-semibold text-lg">Opening Hours</h4>
                <p className="text-sm">Everyday, 10:00 - 19:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-accent text-white p-4">
                <FaEnvelope />
              </div>
              <div className="text-start">
                <h4 className="font-semibold text-lg">Email Us</h4>
                <p className="text-sm">info@kiaiki.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
