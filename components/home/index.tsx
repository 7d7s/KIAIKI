import Hero from "@/components/home/hero";
import Showcase from "@/components/home/showcase";
import TrustedPartners from "@/components/home/trustedPartners";
import About from "@/components/home/about";
import WhyChooseUs from "@/components/home/whychooseus";
import Services from "@/components/home/service";
import Project from "@/components/home/projects";
import Contact from "@/components/home/contact";
import Testimonials from "@/components/home/testimonial";
import OurProcess from "@/components/home/process";
import LatestNews from "@/components/home/latestNews";


function Home() {
  return (
    <div className="">
      <Hero />
      <Showcase/>
      <TrustedPartners/>
      <About/>
      <WhyChooseUs/>
      <Services/>
      <Project/>
      <OurProcess/>
      <Contact/>
      <Testimonials/>
      <LatestNews/>
    </div>
  );
}

export default Home;
