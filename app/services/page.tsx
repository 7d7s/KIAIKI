import DynamicBanner from '@/components/common/banner'
import ConsultationSection from '@/components/layout/contact/consultationSection'
import Faq from '@/components/layout/faq'
import Services from '@/components/layout/service'
// import Testimonials from '@/components/testimonial/index'
import React from 'react'

function page() {
  return (
    <>
               <DynamicBanner
  imageUrl="https://res.cloudinary.com/ddgbehuxg/image/upload/v1745220686/servicsbanner_xlpyji.avif"
  altText="About Banner"
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" }
  ]} title="Our Services"
/>
    <Services/>
      <Faq/>
      <ConsultationSection/>
    </>
  )
}

export default page
