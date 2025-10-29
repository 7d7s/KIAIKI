"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Button from '@/components/common/button';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do you offer free consultations?",
    answer: "Yes, we offer a free initial consultation to understand your space, style, and vision before we begin."
  },
  {
    question: "How is an interior designer assigned to my project?",
    answer: "We match you with a designer based on your preferences, design goals, and the scope of your project."
  },
  {
    question: "Do I get a cool 3D rendering like I see on HGTV?",
    answer: "Absolutely! We provide high-quality 3D renderings so you can visualize your space before the makeover begins."
  },
  {
    question: "Can you help me pick paint colors and nothing else?",
    answer: "Yes, even if you only need help choosing the right paint colors, we're happy to assist with that too!"
  }
];

const faqsII: FAQItem[] = [
  {
    question: "Can I combine my existing furniture with the new design?",
    answer: "Of course! We love blending the old with the new. Our designers will evaluate your current pieces and incorporate them seamlessly into the fresh design."
  },
  {
    question: "Do you offer eco-friendly or sustainable design options?",
    answer: "Yes, sustainability matters to us. We can source eco-friendly materials, energy-efficient lighting, and locally made decor to create a beautiful and conscious space."
  },
  {
    question: "How do you ensure the design fits my lifestyle and habits?",
    answer: "We begin with a deep-dive consultation where we learn about your daily routine, preferences, and priorities. This ensures your space is both stylish and highly functional."
  },
  {
    question: "What if I change my mind after seeing the design?",
    answer: "No worries! We offer revision rounds so you can request changes and fine-tune the design until you're 100% satisfied with the final concept."
  }
];

const Faq: React.FC = () => {
  const [activeIndices, setActiveIndices] = useState<Record<string, number | null>>({
    general: null,
    special: null
  });

  const toggleFAQ = (section: string, index: number) => {
    setActiveIndices(prev => ({
      ...prev,
      [section]: prev[section] === index ? null : index
    }));
  };

  return (
    <section className="pb-5 bg-white text-black">
      <div className="container mx-auto px-4 md:px-8 py-12 grid lg:grid-cols-2 gap-8">
        <div className="space-y-8" data-aos="fade-up">
          <div>
            <p className="text-sm tracking-widest text-primary-accent uppercase">FAQ</p>
            <h2 className="text-3xl font-bold mt-5">General Questions</h2>
            <p className="mt-5 text-gray-500 max-w-xl">
              Have questions in mind? {"We'"}re here to clear them up. Explore our most commonly asked queries and get the clarity you need before starting your design journey.
            </p>

            <div className="mt-6">
              {faqs.map((faq, index) => (
                <div
                  key={`general-${index}`}
                  className="py-4 border-b border-black/20 cursor-pointer"
                  onClick={() => toggleFAQ('general', index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-green-dark">{faq.question}</h3>
                    {activeIndices.general === index ? (
                      <IoIosArrowUp className="text-green-dark" size={20} />
                    ) : (
                      <IoIosArrowDown className="text-green-dark" size={20} />
                    )}
                  </div>
                  <AnimatePresence>
                    {activeIndices.general === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-2 text-gray-600">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className='mt-20'>
                <h2 className="text-3xl font-bold mt-5">Special Questions</h2>
                <p className="mt-5 text-gray-500 max-w-xl">
                  Curious about how our services work? Find answers to common questions and discover how we make your dream space a reality.
                </p>

                <div className="mt-6 space-y-4">
                  {faqsII.map((faq, index) => (
                    <div
                      key={`special-${index}`}
                      className="py-4 border-b border-black/20 cursor-pointer"
                      onClick={() => toggleFAQ('special', index)}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-green-dark">{faq.question}</h3>
                        {activeIndices.special === index ? (
                          <IoIosArrowUp className="text-green-dark" size={20} />
                        ) : (
                          <IoIosArrowDown className="text-green-dark" size={20} />
                        )}
                      </div>
                      <AnimatePresence>
                        {activeIndices.special === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <p className="pt-2 text-gray-600">{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="" data-aos="fade-up" data-aos-delay="200">
          <div className='sticky top-10'>
            <div className="bg-primary-floral flex items-center justify-center flex-col gap-5 text-center md:p-8 p-5 max-w-sm mx-auto">
              <h3 className="text-xl font-semibold text-gray-800">
                {"Don't "}See The Answer You Need? <br /> Contact Us
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Reach out to us anytime.{" We're "}happy to help you with your queries.
              </p>
              <Button
                href="tel:+918800007740"
                label="Contact Us"
                className="bg-primary-accent text-sm hover:bg-black hover:text-white mb-3 text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;