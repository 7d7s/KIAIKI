import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Contact: React.FC = () => {
  return (
    <section className=" bg-black">
      <div className='container mx-auto px-4 lg:px-16 pt-12'>
      <div className="grid lg:grid-cols-2 gap-10">

        <div className="bg-white p-10 text-black lg:order-1 order-2" data-aos="fade-up">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none"
            />
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Phone"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none"
              />
              <input
                type="text"
                placeholder="Your Subject"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full border border-gray-300 p-3 h-32 rounded resize-none focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-primary-accent hover:bg-black hover:text-white  px-5 py-3 text-white transition-all flex items-center"
            >
              SEND MESSAGE  &nbsp; <MdArrowOutward size={20} />
            </button>
          </form>
        </div>

        <div className="text-white flex flex-col justify-center space-y-6 md:p-10 lg:order-2 order-1" data-aos="fade-up" data-aos-delay="2              00">
        <p className="text-sm tracking-widest text-primary-givry uppercase">Contact Us</p>
          <h2 className="text-3xl font-bold">
            We <span className="pl-2 text-white bg-transparent bg-[linear-gradient(270deg,transparent_54%,#EBD1AE_53%)] ms-2"> Create </span>  Your Space Better
          </h2>
          <p className="text-gray-300">
            Reach out to us for customized interior solutions that combine function, comfort, and elegance. Let’s bring your vision to life, one detail at a time.
          </p>

          <div className="md:gap-8 gap-2 text-sm grid md:grid-cols-2">
  <div className="flex items-start gap-3">
    <FiMapPin className="text-white mt-1 p-3 text-5xl bg-primary-accent w-20 h-12" />
    <div>
      <p><strong>Office Location:</strong></p>
      <p>I-102, Second Floor, Block I, Kirti Nagar, Delhi, 110015</p>
    </div>
  </div>
  <div className="flex items-start gap-3">
    <FiMapPin className="text-white mt-1 p-3 text-5xl bg-primary-accent w-20 h-12" />
    <div>
      <p><strong>2nd Office Location:</strong></p>
      <p>I-102, Ground Floor, Block I, Kirti Nagar, Delhi, 491995</p>
    </div>
  </div>

  <div className="flex items-start gap-3">
  <FiPhone className="text-white mt-1 p-3 text-5xl bg-primary-accent w-20 h-12" />
  <div>
    <p><strong>Call:</strong></p>
    <p> (+91) 834-0346-082 , (+91) 805-8678-682</p>
  </div>
  </div>

  <div className="flex items-start gap-3">
  <FiMail className="text-white mt-1 p-3 text-5xl bg-primary-accent w-20 h-12" />
   <div> 
   <p><strong>Email:</strong></p>
   <p> support@kaikai.com, contect@kaikai.com</p>
   </div>
  </div>
</div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
