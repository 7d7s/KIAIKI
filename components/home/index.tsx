import Hero from "@/components/layout/header/hero";
import TrustedPartners from "@/components/common/trustedPartners";
import AwardCard from "@/components/common/cards/awardCard";
import About from "@/components/layout/about";
import WhyChooseUsSection from "@/components/layout/whychooseus";
import Services from "@/components/layout/service";
import ProcessSection from "@/components/layout/process";
import Contact from "@/components/layout/contact";
import Testimonials from "@/components/layout/testimonial";
import ConsultationSection from "@/components/layout/contact/consultationSection";
import NewSection from "@/components/layout/news";
import ProjectSection from "@/components/layout/project/project-details";


function Home() {
  return (
    <div className="">
      <Hero />
      <AwardCard/>
      <TrustedPartners/>
      <About/>
      <WhyChooseUsSection/>
      <Services/>
      <ProjectSection/>
      <ProcessSection/>
      <Contact/>
      <Testimonials/>
      <ConsultationSection/>
      <NewSection/>
    </div>
  );
}

export default Home;
