import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import Button from '@/components/common/button';
import Link from 'next/link';
import Image from 'next/image';


const Footer: React.FC = () => {
  return (
    <footer className=" bg-black text-white">
      <div className="container mx-auto px-4 lg:px-16 md:py-20 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className='flex flex-col lg:col-span-1 md:col-span-2 justify-around lg:order-1 order-2'>
            <div className='lg:text-start text-center'>
              <div className="flex items-center lg:justify-start justify-center gap-2 mb-4">
                <Image src="https://res.cloudinary.com/dbldpiazm/image/upload/v1758358663/image_v3wwpn.png" width={1000} height={1000} alt="Interse Logo" className="max-h-36 w-auto" />
              </div>
              <p className="lg:text-start text-center md:w-4/5 lg:mx-0 mx-auto w-full">
                Interse is your trusted source for smart living and stylish design inspiration. We craft
                solutions that blend comfort, aesthetics, and innovation for everyday life.
              </p>
              <div className="flex gap-4 mt-10 lg:justify-start justify-center">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-accent rounded-full text-xl p-3 text-white hover:bg-white hover:text-primary-accent transform hover:scale-75 transition duration-300 ease-in-out"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-accent rounded-full text-xl p-3 text-white hover:bg-white hover:text-primary-accent transform hover:scale-75 transition duration-300 ease-in-out"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-accent rounded-full text-xl p-3 text-white hover:bg-white hover:text-primary-accent transform hover:scale-75 transition duration-300 ease-in-out"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-accent rounded-full text-xl p-3 text-white hover:bg-white hover:text-primary-accent transform hover:scale-75 transition duration-300 ease-in-out"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
            <div className="lg:text-start text-center mt-5">
              &copy; {new Date().getFullYear()} KIAIKI. All rights reserved.
            </div>
          </div>

          <div className='grid lg:grid-cols-3 lg:col-span-1 md:col-span-2 gap-10 lg:order-2 order-1'>
            <div className='md:col-span-3'>
              <h3 className="text-2xl font-semibold mb-4">Subscribe Our Newsletter</h3>

              <div className="flex items-center border-b border-gray-500">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full bg-transparent px-2 py-2 outline-none"
                />
                <Button
                  href="#"
                  label="Subscribe"
                  className="bg-primary-accent text-sm hover:bg-white hover:text-black mb-3"
                />
                <br />
              </div>
            </div>
            <ul className="space-y-2 text-sm">
              <h4 className="text-lg font-semibold mb-4">Other Pages</h4>
              <li className="flex items-center gap-2 hover:text-primary-accent transition">
                <FiChevronRight className="text-primary-accent" />
                <Link href="/">Home</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-primary-accent transition">
                <FiChevronRight className="text-primary-accent" />
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-primary-accent transition">
                <FiChevronRight className="text-primary-accent" />
                <Link href="/services">Services</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-primary-accent transition">
                <FiChevronRight className="text-primary-accent" />
                <Link href="/contact">Contact</Link>
              </li>
            </ul>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 hover:text-primary-accent cursor-pointer transition">
                  <FiChevronRight className="text-primary-accent" />
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="flex items-center gap-2 hover:text-primary-accent cursor-pointer transition">
                  <FiChevronRight className="text-primary-accent" />
                  <Link href="/terms-of-service">Term Of Service</Link>
                </li>
                <li className="flex items-center gap-2 hover:text-primary-accent cursor-pointer transition">
                  <FiChevronRight className="text-primary-accent" />
                  <Link href="/credits">Credits</Link>
                </li>
                <li className="flex items-center gap-2 hover:text-primary-accent cursor-pointer transition">
                  <FiChevronRight className="text-primary-accent" />
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-4">Contact Details</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2">
                  <p>I-102, Second Floor, Block I, Kirti Nagar, Delhi, 110015</p>
                </li>
                <li className="flex items-start gap-2">
                  <p>kiaiki@gmail.com</p>
                </li>
                <li className="flex items-start gap-2">
                  <p>  (+91) 9999036239</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
