import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import CounterCard from "@/components/common/cards/counterCard";

const testimonials = [
  {
    name: "Vinay Kumar",
    title: "Bangalore",
    feedback:
      "From the initial consultation to the final reveal, everything was seamless. Our 2BHK now looks straight out of a magazine. Their sense of style and attention to detail truly amazed us.",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1745326641/tes_z3fx0a.avif",
  },
  {
    name: "Rajeev Sharma",
    title: "Pune",
    feedback:
      "We wanted our home to feel cozy yet modern, and they delivered exactly that. The designers understood our vision and turned our ideas into a beautiful reality. Highly recommended!",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1745327112/t_ovd0oz.avif",
  },
  {
    name: "Raveena Kumari",
    title: "Delhi",
    feedback:
      "Our office space needed a refresh, and their team gave it a whole new life! The color palette, the furniture, the lighting—everything came together perfectly. It now feels vibrant and professional.",
    image: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1745327518/t_ysljlv.avif",
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024, // tablet
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640, // mobile
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Testimonials: React.FC = () => {
  return (
    <section className=" bg-white text-gray-800">
      <div className="container mx-auto px-4 lg:px-16 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 items-start lg:text-start text-center">
          <div className="col-span-2 lg:col-span-2 space-y-4 flex flex-col lg:justify-start justify-center lg:items-start items-center" data-aos="fade-up">

            <p className="text-sm tracking-widest text-primary-accent uppercase ">Testimonials</p>
            <h2 className="text-3xl font-bold my-5">
              What Our{" "}
              <span className="text-black bg-transparent bg-[linear-gradient(270deg,transparent_54%,#EBD1AE_53%)] ms-2 pl-1">
                Clients
              </span>{" "}
              Say About Us
            </h2>
            <p className="text-gray-600 md:w-4/6 w-full">
              Hear from our valued clients whose homes, offices, and living
              spaces we’ve transformed into functional, beautiful, and
              personalized interiors.
            </p>

          </div>
          <div className="col-span-2 lg:col-span-1 flex justify-center text-center lg:text-start " data-aos="fade-up" data-aos-delay="300">
            <div>
              <CounterCard value={10} suffix="+" />
              <div className="md:flex">
                <h6 className="text-black text-xl md:w-3/6  md:py-5 pt-3">Customers Rated Our Support</h6>
                <div className="flex flex-col gap-3 mt-2 p-3 text-yellow-500 md:border-l-2 items-center justify-center">
                  <div className="flex">{[...Array(5)].map((_, idx) => <FaStar key={idx} className="md:text-4xl text-3xl pl-1" />)}</div>
                  <span className="text-gray-600 ml-2">Average rating 5 / 5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:mt-8 mt-5" data-aos="fade-up" data-aos-delay="100">
          <div className="bg-primary-floral md:p-10 p-5">
            <Slider {...sliderSettings}>
              {testimonials.map((t, idx) => (
                <div key={idx} className="p-6">
                  <p className="italic text-gray-600 mb-7">{t.feedback}</p>
                  <div className="flex items-center gap-3">
                    <Image src={t.image} alt={t.name} width={1000} height={1000} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div></div>
    </section>
  );
}
export default Testimonials;